const DATA_SOURCE = 'companies_with_mural.json';

let companiesData = createDashboardData({ companies: [] });

// Global variables
let currentSort = { column: null, direction: 'asc' };
let filteredCompanies = [...companiesData.companies];

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    bootstrapDashboard();
});

async function bootstrapDashboard() {
    try {
        const rawData = await fetchCompaniesData();
        companiesData = createDashboardData(rawData);
        filteredCompanies = [...companiesData.companies];

        initializeTabs();
        initializeCharts();
        initializeTable();
        initializeFilters();
        initializeCompanyGrid();
        initializeModal();
        initializeClausesTab();
        updateStats();
    } catch (error) {
        reportInitializationError(error);
    }
}

function createDashboardData(rawData) {
    const companies = Array.isArray(rawData?.companies) ? rawData.companies : [];
    const summary = generateSummary(companies);
    return { companies, summary };
}

async function fetchCompaniesData() {
    const response = await fetch(DATA_SOURCE, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error(`Failed to load data (${response.status})`);
    }
    return response.json();
}

function reportInitializationError(error) {
    console.error('Failed to initialize dashboard:', error);
    const container = document.querySelector('.container');
    if (!container) {
        return;
    }

    const banner = document.createElement('div');
    banner.className = 'dashboard-error';
    banner.textContent = 'We\'re unable to load the dashboard data right now. Please make sure you\'re running the project from a local server and try refreshing the page.';

    container.insertBefore(banner, container.firstChild);
}

function generateSummary(companies) {
    const summary = {
        totalCompanies: companies.length,
        strictApproach: 0,
        moderate: 0,
        customerFriendly: 0,
        balanced: 0,
        terminationFeeStats: {
            fullRemainingTerm: 0,
            partialRemainingTerm: 0,
            proportionateFee: 0,
            notSpecified: 0
        },
        refundStats: {
            noRefunds: 0,
            creditsTransfer: 0,
            notSpecified: 0,
            proRatedFees: 0
        }
    };

    const approachKeyMap = {
        'Strict': 'strictApproach',
        'Moderate': 'moderate',
        'Customer-Friendly': 'customerFriendly',
        'Balanced': 'balanced'
    };

    companies.forEach(company => {
        const approachKey = approachKeyMap[company.approach];
        if (approachKey) {
            summary[approachKey] += 1;
        }

        const terminationCategory = getTerminationCategory(company.terminationFee);
        summary.terminationFeeStats[terminationCategory] += 1;

        const refundCategory = getRefundCategory(company.refundPolicy);
        summary.refundStats[refundCategory] += 1;
    });

    return summary;
}

function getTerminationCategory(terminationFee = '') {
    const value = terminationFee.toLowerCase();

    if (!value || value.includes('not specified')) {
        return 'notSpecified';
    }

    if (value.includes('full remaining term') || value.includes('100%')) {
        return 'fullRemainingTerm';
    }

    if (value.includes('partial') || value.includes('33%')) {
        return 'partialRemainingTerm';
    }

    if (value.includes('proportionate')) {
        return 'proportionateFee';
    }

    return 'notSpecified';
}

function getRefundCategory(refundPolicy = '') {
    const value = refundPolicy.toLowerCase();

    if (!value || value.includes('not specified')) {
        return 'notSpecified';
    }

    if (value.includes('pro-rated')) {
        return 'proRatedFees';
    }

    if (value.includes('credits') || value.includes('transfer')) {
        return 'creditsTransfer';
    }

    if (value.includes('no refunds')) {
        return 'noRefunds';
    }

    return 'notSpecified';
}

const CLAUSE_CONFIG = [
    { key: 'terminationClause', label: 'Termination Clause', icon: '📋' },
    { key: 'refundClause', label: 'Refund Policy Clause', icon: '💰' },
    { key: 'noticeClause', label: 'Notice Period Clause', icon: '⏰' },
    { key: 'switchingFeesClause', label: 'Switching Fees Clause', icon: '🔄' }
];

function createClauseList(company) {
    const fragment = document.createDocumentFragment();
    const clauses = company.specificClauses || {};

    CLAUSE_CONFIG.forEach(({ key, label, icon }) => {
        const text = clauses[key];
        fragment.appendChild(createClauseItemElement({ label, icon, text }));
    });

    return fragment;
}

function createClauseItemElement({ label, icon, text, additionalClass }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'clause-item';
    if (additionalClass) {
        wrapper.classList.add(additionalClass);
    }

    const clauseLabel = document.createElement('div');
    clauseLabel.className = 'clause-label';

    const iconSpan = document.createElement('span');
    iconSpan.className = 'clause-icon';
    iconSpan.textContent = icon;
    clauseLabel.appendChild(iconSpan);
    clauseLabel.appendChild(document.createTextNode(` ${label}`));

    const clauseText = document.createElement('div');
    clauseText.className = 'clause-text';
    clauseText.textContent = text || 'Not specified in available documentation';

    wrapper.appendChild(clauseLabel);
    wrapper.appendChild(clauseText);

    return wrapper;
}

function createMuralTransition(company, variant) {
    const transitionClause = company.specificClauses?.transitionClause;
    if (company.name !== 'Mural' || !transitionClause) {
        return null;
    }

    if (variant === 'modal') {
        const highlightWrapper = document.createElement('div');
        highlightWrapper.className = 'mural-highlight';

        const heading = document.createElement('h5');
        heading.textContent = "🌟 Mural's Unique Extended Transition Period";
        highlightWrapper.appendChild(heading);

        const clauseItem = createClauseItemElement({
            label: 'Extended Transition Clause',
            icon: '⏳',
            text: transitionClause
        });

        highlightWrapper.appendChild(clauseItem);
        return highlightWrapper;
    }

    return createClauseItemElement({
        label: 'Extended Transition Clause (Unique to Mural)',
        icon: '🔄',
        text: transitionClause,
        additionalClass: 'mural-highlight'
    });
}

function createDetailItem(label, value) {
    const detailItem = document.createElement('div');
    detailItem.className = 'detail-item';

    const detailLabel = document.createElement('div');
    detailLabel.className = 'detail-label';
    detailLabel.textContent = label;

    const detailValue = document.createElement('div');
    detailValue.className = 'detail-value';

    if (value instanceof Node) {
        detailValue.appendChild(value);
    } else {
        detailValue.textContent = value || 'Not specified';
    }

    detailItem.appendChild(detailLabel);
    detailItem.appendChild(detailValue);

    return detailItem;
}

function createSummaryItem(label, value) {
    const summaryItem = document.createElement('div');
    summaryItem.className = 'summary-item';

    const strongLabel = document.createElement('strong');
    strongLabel.textContent = label;
    summaryItem.appendChild(strongLabel);
    summaryItem.appendChild(document.createTextNode(` ${value || 'Not specified'}`));

    return summaryItem;
}

function createTermsLink(url, label = 'Company terms link') {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'btn btn--sm btn--secondary';
    link.textContent = label;
    return link;
}

// Tab functionality
function initializeTabs() {
    const tabButtons = Array.from(document.querySelectorAll('.tab-button'));
    const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

    if (!tabButtons.length || !tabPanels.length) {
        return;
    }

    const activateTab = (button) => {
        if (!button) {
            return;
        }

        tabButtons.forEach(btn => {
            const isActive = btn === button;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', String(isActive));
            btn.tabIndex = isActive ? 0 : -1;

            const panelId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);

            if (panel) {
                panel.classList.toggle('active', isActive);
                if (isActive) {
                    panel.removeAttribute('hidden');
                    panel.tabIndex = 0;
                } else {
                    panel.setAttribute('hidden', '');
                    panel.tabIndex = -1;
                }
            }
        });
    };

    const focusTabByOffset = (currentButton, offset) => {
        const currentIndex = tabButtons.indexOf(currentButton);
        if (currentIndex === -1) {
            return;
        }

        const nextIndex = (currentIndex + offset + tabButtons.length) % tabButtons.length;
        const nextButton = tabButtons[nextIndex];
        nextButton.focus();
        activateTab(nextButton);
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => activateTab(button));
        button.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    event.preventDefault();
                    focusTabByOffset(button, 1);
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    event.preventDefault();
                    focusTabByOffset(button, -1);
                    break;
                case 'Home':
                    event.preventDefault();
                    tabButtons[0].focus();
                    activateTab(tabButtons[0]);
                    break;
                case 'End':
                    event.preventDefault();
                    const lastButton = tabButtons[tabButtons.length - 1];
                    lastButton.focus();
                    activateTab(lastButton);
                    break;
                default:
                    break;
            }
        });
    });

    const initiallyActive = document.querySelector('.tab-button.active') || tabButtons[0];
    activateTab(initiallyActive);
}

// Chart initialization
function initializeCharts() {
    createTerminationChart();
    createRefundChart();
}

function createTerminationChart() {
    const canvas = document.getElementById('terminationChart');
    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return;
    }
    
    const data = {
        labels: ['Full Remaining Term (100%)', 'Partial Term (33%)', 'Proportionate Fee', 'Not Specified'],
        datasets: [{
            label: 'Number of Companies',
            data: [
                companiesData.summary.terminationFeeStats.fullRemainingTerm,
                companiesData.summary.terminationFeeStats.partialRemainingTerm,
                companiesData.summary.terminationFeeStats.proportionateFee,
                companiesData.summary.terminationFeeStats.notSpecified
            ],
            backgroundColor: ['#5887FF', '#79C1FF', '#00C27A', '#FC83FF'],
            borderColor: ['#3B64E0', '#4F9DE6', '#008B59', '#C650D5'],
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const percentage = Math.round((context.raw / companiesData.summary.totalCompanies) * 100);
                            return `${context.raw} companies (${percentage}%)`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function createRefundChart() {
    const canvas = document.getElementById('refundChart');
    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return;
    }
    
    const data = {
        labels: ['No Refunds', 'Credits/Free Transfer', 'Not Specified', 'Pro-rated Fees'],
        datasets: [{
            data: [
                companiesData.summary.refundStats.noRefunds,
                companiesData.summary.refundStats.creditsTransfer,
                companiesData.summary.refundStats.notSpecified,
                companiesData.summary.refundStats.proRatedFees
            ],
            backgroundColor: ['#FC83FF', '#5887FF', '#8FEC7F', '#00C27A'],
            borderColor: ['#C650D5', '#3B64E0', '#52C459', '#008B59'],
            borderWidth: 2
        }]
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const percentage = Math.round((context.raw / companiesData.summary.totalCompanies) * 100);
                            return `${context.label}: ${context.raw} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Table functionality
function initializeTable() {
    renderTable(filteredCompanies);
    
    // Add sorting functionality
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => {
            const column = header.dataset.column;
            sortTable(column);
        });
    });

    const companyTable = document.getElementById('companyTable');
    if (companyTable) {
        companyTable.addEventListener('click', handleCompanyTableClick);
    }
}

function renderTable(companies) {
    const tbody = document.querySelector('#companyTable tbody');
    if (!tbody) {
        return;
    }

    tbody.textContent = '';

    companies.forEach(company => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        const nameStrong = document.createElement('strong');
        nameStrong.textContent = company.name;
        nameCell.appendChild(nameStrong);
        row.appendChild(nameCell);

        const approachCell = document.createElement('td');
        const approachBadge = document.createElement('span');
        approachBadge.className = `approach-badge ${getApproachClass(company.approach)}`;
        approachBadge.textContent = company.approach;
        approachCell.appendChild(approachBadge);
        row.appendChild(approachCell);

        const terminationCell = document.createElement('td');
        terminationCell.textContent = company.terminationFee || 'Not specified';
        row.appendChild(terminationCell);

        const refundCell = document.createElement('td');
        refundCell.textContent = company.refundPolicy || 'Not specified';
        row.appendChild(refundCell);

        const noticeCell = document.createElement('td');
        noticeCell.textContent = company.noticeMonths ? `${company.noticeMonths} months` : 'Not specified';
        row.appendChild(noticeCell);

        const actionsCell = document.createElement('td');
        const detailsButton = document.createElement('button');
        detailsButton.className = 'btn btn--sm btn--primary';
        detailsButton.type = 'button';
        detailsButton.dataset.action = 'view-company';
        detailsButton.dataset.company = company.name;
        detailsButton.textContent = 'View Details';
        actionsCell.appendChild(detailsButton);
        row.appendChild(actionsCell);

        tbody.appendChild(row);
    });
}

function handleCompanyTableClick(event) {
    const trigger = event.target.closest('[data-action="view-company"]');
    if (!trigger) {
        return;
    }

    const companyName = trigger.dataset.company;
    if (companyName) {
        showCompanyDetails(companyName);
    }
}

function getApproachClass(approach) {
    switch(approach) {
        case 'Strict': return 'strict';
        case 'Moderate': return 'moderate';
        case 'Customer-Friendly': return 'friendly';
        case 'Balanced': return 'balanced';
        default: return 'balanced';
    }
}

function sortTable(column) {
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
    }
    
    filteredCompanies.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (aVal < bVal) return currentSort.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return currentSort.direction === 'asc' ? 1 : -1;
        return 0;
    });
    
    renderTable(filteredCompanies);
}

// Filter functionality
function initializeFilters() {
    const searchInput = document.getElementById('searchInput');
    const approachFilter = document.getElementById('approachFilter');
    const refundFilter = document.getElementById('refundFilter');
    
    if (!searchInput || !approachFilter || !refundFilter) {
        return;
    }

    populateFilterOptions(approachFilter, refundFilter);

    searchInput.addEventListener('input', applyFilters);
    approachFilter.addEventListener('change', applyFilters);
    refundFilter.addEventListener('change', applyFilters);
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const approachFilter = document.getElementById('approachFilter').value;
    const refundFilter = document.getElementById('refundFilter').value;
    
    filteredCompanies = companiesData.companies.filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(searchTerm);
        const matchesApproach = !approachFilter || company.approach === approachFilter;
        const matchesRefund = !refundFilter || company.refundPolicy === refundFilter;
        
        return matchesSearch && matchesApproach && matchesRefund;
    });
    
    renderTable(filteredCompanies);
}

function populateFilterOptions(approachFilter, refundFilter) {
    const uniqueApproaches = new Set();
    const uniqueRefunds = new Set();

    companiesData.companies.forEach(company => {
        if (company.approach) {
            uniqueApproaches.add(company.approach);
        }
        if (company.refundPolicy) {
            uniqueRefunds.add(company.refundPolicy);
        }
    });

    replaceSelectOptions(approachFilter, Array.from(uniqueApproaches).sort());
    replaceSelectOptions(refundFilter, Array.from(uniqueRefunds).sort());
}

function replaceSelectOptions(selectElement, values) {
    const selectedValue = selectElement.value;
    Array.from(selectElement.querySelectorAll('option:not([value=""])')).forEach(option => option.remove());

    values.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    });

    if (values.includes(selectedValue)) {
        selectElement.value = selectedValue;
    } else {
        selectElement.value = '';
    }
}

// Company grid for clauses tab
function initializeCompanyGrid() {
    const grid = document.getElementById('companyGrid');
    if (!grid) {
        return;
    }

    grid.textContent = '';

    companiesData.companies.forEach(company => {
        const card = document.createElement('div');
        card.className = 'company-card';
        card.classList.add(`approach-${getApproachClass(company.approach)}`);
        card.dataset.company = company.name;
        card.tabIndex = 0;

        const title = document.createElement('h4');
        title.textContent = company.name;
        card.appendChild(title);

        const approachParagraph = document.createElement('p');
        const approachBadge = document.createElement('span');
        approachBadge.className = `approach-badge ${getApproachClass(company.approach)}`;
        approachBadge.textContent = company.approach;
        approachParagraph.appendChild(approachBadge);
        card.appendChild(approachParagraph);

        const terminationParagraph = document.createElement('p');
        const terminationLabel = document.createElement('strong');
        terminationLabel.textContent = 'Termination:';
        terminationParagraph.appendChild(terminationLabel);
        terminationParagraph.appendChild(document.createTextNode(` ${company.terminationFee || 'Not specified'}`));
        card.appendChild(terminationParagraph);

        const refundParagraph = document.createElement('p');
        const refundLabel = document.createElement('strong');
        refundLabel.textContent = 'Refunds:';
        refundParagraph.appendChild(refundLabel);
        refundParagraph.appendChild(document.createTextNode(` ${company.refundPolicy || 'Not specified'}`));
        card.appendChild(refundParagraph);

        grid.appendChild(card);
    });

    grid.addEventListener('click', handleCompanyGridInteraction);
    grid.addEventListener('keydown', handleCompanyGridInteraction);
}

function handleCompanyGridInteraction(event) {
    const isKeyboardActivation = event.type === 'keydown' && (event.key === 'Enter' || event.key === ' ');
    if (event.type === 'keydown' && !isKeyboardActivation) {
        return;
    }

    const targetCard = event.target.closest('[data-company]');
    if (!targetCard) {
        return;
    }

    if (event.type === 'keydown') {
        event.preventDefault();
    }

    const companyName = targetCard.dataset.company;
    if (companyName) {
        showCompanyDetails(companyName);
    }
}

// Initialize clauses tab functionality
function initializeClausesTab() {
    const selector = document.getElementById('clauseCompanySelect');
    if (!selector) {
        return;
    }

    // Populate dropdown
    companiesData.companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company.name;
        option.textContent = company.name;
        selector.appendChild(option);
    });
    
    // Add change event listener
    selector.addEventListener('change', function() {
        const companyName = this.value;
        if (companyName) {
            showSelectedCompanyClauses(companyName);
        } else {
            const detailContainer = document.getElementById('selectedCompanyClauses');
            if (detailContainer) {
                detailContainer.style.display = 'none';
                detailContainer.textContent = '';
            }
        }
    });
}

function showSelectedCompanyClauses(companyName) {
    const company = companiesData.companies.find(c => c.name === companyName);
    if (!company) return;
    
    const container = document.getElementById('selectedCompanyClauses');
    if (!container) {
        return;
    }
    container.style.display = 'block';
    container.textContent = '';

    const heading = document.createElement('h4');
    heading.textContent = `${company.name} - Contract Clauses`;
    container.appendChild(heading);

    if (company.termsUrl) {
        const actions = document.createElement('div');
        actions.className = 'clause-actions';
        actions.appendChild(createTermsLink(company.termsUrl, 'View company terms'));
        container.appendChild(actions);
    }

    container.appendChild(createClauseList(company));

    const muralHighlight = createMuralTransition(company, 'clauses');
    if (muralHighlight) {
        container.appendChild(muralHighlight);
    }
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('companyModal');
    const closeBtn = document.getElementById('modalClose');
    if (!modal || !closeBtn) {
        return;
    }
    
    // Close button event listener
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
    });
    
    // Click outside modal to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function showCompanyDetails(companyName) {
    const company = companiesData.companies.find(c => c.name === companyName);
    if (!company) return;
    
    const modal = document.getElementById('companyModal');
    const modalName = document.getElementById('modalCompanyName');
    const modalBody = document.getElementById('modalBody');
    if (!modal || !modalName || !modalBody) {
        return;
    }
    
    modalName.textContent = `${company.name} - Contract Clauses`;
    modalBody.textContent = '';

    const overview = document.createElement('div');
    overview.className = 'company-overview';

    const approachBadge = document.createElement('span');
    approachBadge.className = `approach-badge ${getApproachClass(company.approach)}`;
    approachBadge.textContent = company.approach;
    overview.appendChild(createDetailItem('Compliance Approach', approachBadge));
    overview.appendChild(createDetailItem('Summary', company.details));

    modalBody.appendChild(overview);

    if (company.termsUrl) {
        const actions = document.createElement('div');
        actions.className = 'detail-actions';
        actions.appendChild(createTermsLink(company.termsUrl));
        modalBody.appendChild(actions);
    }

    const clausesSection = document.createElement('div');
    clausesSection.className = 'contract-clauses';

    const clausesHeading = document.createElement('h4');
    clausesHeading.textContent = 'Contract Clauses';
    clausesSection.appendChild(clausesHeading);
    clausesSection.appendChild(createClauseList(company));

    const muralHighlight = createMuralTransition(company, 'modal');
    if (muralHighlight) {
        clausesSection.appendChild(muralHighlight);
    }

    modalBody.appendChild(clausesSection);

    const policySummary = document.createElement('div');
    policySummary.className = 'policy-summary';
    policySummary.appendChild(createSummaryItem('Termination Fee:', company.terminationFee));
    policySummary.appendChild(createSummaryItem('Refund Policy:', company.refundPolicy));
    const noticeValue = company.noticeMonths != null ? `${company.noticeMonths} months` : 'Not specified';
    policySummary.appendChild(createSummaryItem('Notice Period:', noticeValue));

    modalBody.appendChild(policySummary);
    
    modal.classList.remove('hidden');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('companyModal');
    modal.classList.remove('active');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Update stats in header
function updateStats() {
    const { summary } = companiesData;
    const statElements = [
        ['total-companies', summary.totalCompanies],
        ['strict-count', summary.strictApproach],
        ['moderate-count', summary.moderate],
        ['friendly-count', summary.customerFriendly],
        ['balanced-count', summary.balanced]
    ];

    statElements.forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });

    const percentMap = {
        strictApproachPercent: getPercentage(summary.strictApproach, summary.totalCompanies),
        moderatePercent: getPercentage(summary.moderate, summary.totalCompanies),
        customerFriendlyPercent: getPercentage(summary.customerFriendly, summary.totalCompanies),
        balancedPercent: getPercentage(summary.balanced, summary.totalCompanies)
    };

    document.querySelectorAll('[data-summary]').forEach(element => {
        const key = element.dataset.summary;
        if (key in percentMap) {
            element.textContent = percentMap[key];
        }
    });
}

function getPercentage(count, total) {
    if (!total) {
        return 0;
    }
    return Math.round((count / total) * 100);
}

// Export functionality
function exportTable() {
    const headers = ['Company', 'Approach', 'Termination Fee', 'Refund Policy', 'Notice Period'];
    const rows = filteredCompanies.map(company => [
        company.name,
        company.approach,
        company.terminationFee,
        company.refundPolicy,
        company.noticeMonths != null ? `${company.noticeMonths} months` : 'Not specified'
    ]);
    
    const escapeForCsv = (value) => {
        if (value === undefined || value === null) {
            return '""';
        }
        const safeValue = String(value).replace(/"/g, '""');
        return `"${safeValue}"`;
    };

    const csvLines = [
        headers.map(escapeForCsv).join(','),
        ...rows.map(row => row.map(escapeForCsv).join(','))
    ];

    const csvContent = csvLines.join('\n');
    
    const blob = new Blob([`${csvContent}\n`], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'eu_data_act_compliance_benchmark_with_mural.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Make functions globally available
window.showCompanyDetails = showCompanyDetails;
window.closeModal = closeModal;
window.exportTable = exportTable;
