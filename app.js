// Company data with Mural's unique moderate approach
const companiesData = {
  "companies": [
    {
      "name": "Teradata",
      "noticeMonths": 2,
      "terminationFee": "Full Remaining Term (100%)",
      "refundPolicy": "No Refunds",
      "approach": "Strict",
      "keyFeatures": "Comprehensive addendum, switching charges withdrawn per DA Article 29",
      "details": "Requires payment of unpaid fees for remaining term. Comprehensive switching and exit plan provided.",
      "specificClauses": {
        "terminationClause": "Section 10.3: Upon termination of the Agreement according to paragraphs 10.1 and 10.2 the termination penalties to be paid by the Customer to the Provider will be due immediately. The termination penalty is the amount of the unpaid fees for the remaining term from the date of termination until end of the agreed Cloud Service Term set out in the Order.",
        "refundClause": "Section 10.3: Teradata will deduct from the penalty any fees that Teradata is refunded from the cloud platform provider, if any, as a result of the early termination of the Cloud Service Term. Under no circumstances does this provision require Teradata to seek such fees from the cloud platform provider.",
        "noticeClause": "Section 4.1: The Customer must give the Provider a switching notice that it initiates the switching, observing the Notice Period of two months.",
        "switchingFeesClause": "Section 9.1: The charges to be paid by the Customer for switching will be confirmed by Teradata at the time when the Customer has initiated the switching process. Switching charges will be gradually withdrawn in accordance with Article 29 of the Data Act."
      }
    },
    {
      "name": "Salesforce",
      "noticeMonths": 2,
      "terminationFee": "Full Remaining Term (100%)",
      "refundPolicy": "No Refunds",
      "approach": "Strict",
      "keyFeatures": "Must pay remaining term fees, no other penalties",
      "details": "Outstanding subscription fees for remainder of term as early termination fee. No additional penalties.",
      "specificClauses": {
        "terminationClause": "Section 2: Customer must pay any outstanding subscription fees covering the remainder of the term of the relevant Order Form(s) as an early termination fee. SFDC will not charge any other fees or penalties.",
        "refundClause": "Section 2: For the avoidance of doubt, such termination will not relieve Customer of its obligation to pay any fees due to SFDC for the period prior to the Termination Date of the relevant Order Form.",
        "noticeClause": "Section 1: A Customer who is registered in a member state of the EU/EEA, may complete this form to request at any time during a subscription term with a 2-month notification period",
        "switchingFeesClause": "Section 2: SFDC will not charge any other fees or penalties [beyond the early termination fee]."
      }
    },
    {
      "name": "BMC",
      "noticeMonths": 2,
      "terminationFee": "Full Remaining Term (100%)",
      "refundPolicy": "No Refunds",
      "approach": "Strict",
      "keyFeatures": "Strict enforcement, non-refundable prepaid amounts, 60-day notice",
      "details": "Requires 60-day notice (exceeding minimum). Prepaid amounts explicitly non-refundable.",
      "specificClauses": {
        "terminationClause": "Section 4.5: Customer acknowledges and agrees that the switching or transferring right under this Section 4 is subject to payment by Customer to BMC, upon receipt of an invoice from BMC, of an early termination fee equal to the total fees that would have been payable for the period between the expiration of the Transitional Period and the end of the Term of the terminated Subscription Service(s) under the applicable Order.",
        "refundClause": "Section 4.5: Any fees paid in advance by Customer are non-refundable. If applicable, BMC will apply any amounts prepaid by Customer for the Remaining Term toward satisfaction of the early termination fee.",
        "noticeClause": "Section 4.1: Customer may switch from a Subscription Service to a data processing service offered by a different provider by providing BMC with a sixty (60) days' prior written notice",
        "switchingFeesClause": "Section 4.6: No switch or transfer will relieve Customer of the obligation to pay any fees accrued or payable to BMC pursuant to any Order or this Data Act Addendum."
      }
    },
    {
      "name": "Mural",
      "noticeMonths": 2,
      "terminationFee": "Partial Remaining Term (33%)",
      "refundPolicy": "No Refunds + Pro-rated Retrieval Fees",
      "approach": "Moderate",
      "keyFeatures": "33% early termination fee, extended transition period, pro-rated retrieval fees",
      "details": "Charges 33% of remaining subscription fees as early termination penalty. Offers transition period up to 3 months plus 30-day retrieval period.",
      "specificClauses": {
        "terminationClause": "In addition, in the event Customer notifies Mural of its intention to terminate the Services, for any remaining Subscription Term not paid for by the Customer at the time of such notice, the Customer agrees to pay Mural early termination fee equal to 33% of the agreed unpaid Subscription Fees applicable to the remainder of the Term.",
        "refundClause": "Customer will pay Mural the compensation which shall equal to pro-rated amount of the annual fees set forth in this Order Form for such Retrieval Period (30 days after transition period).",
        "noticeClause": "Customer may terminate services with notice per EU Data Act requirements (implied 2-month maximum notice period).",
        "switchingFeesClause": "Any additional Mural services requested by the Customer shall be offered at the then current list prices based on good faith estimates of the work requested.",
        "transitionClause": "Customer may extend the Transition Period once for a period that the Customer considers necessary to transfer Content from the Service. Customer hereby agrees that a period of more than three (3) months shall not be deemed necessary."
      }
    },
    {
      "name": "Samsara",
      "noticeMonths": 2,
      "terminationFee": "Proportionate Fee",
      "refundPolicy": "No Refunds",
      "approach": "Balanced",
      "keyFeatures": "Balanced approach, proportionate fees, clear distinction from switching fees",
      "details": "Applies proportionate early termination fee but distinguishes from switching charges. Fair and transparent.",
      "specificClauses": {
        "terminationClause": "Proportionate early termination fee based on remaining charges (specific clause not available in excerpt)",
        "refundClause": "No refunds mentioned - proportionate fees applied (specific clause not available)",
        "noticeClause": "2-month notice period per EU Data Act requirements",
        "switchingFeesClause": "Not a switching fee - early termination fee distinction made"
      }
    },
    {
      "name": "AWS",
      "noticeMonths": 2,
      "terminationFee": "Not Specified",
      "refundPolicy": "Credits/Free Transfer",
      "approach": "Customer-Friendly",
      "keyFeatures": "Free data transfer credits, proactive compliance",
      "details": "Waives data transfer fees globally. Proactive approach to customer choice and compliance.",
      "specificClauses": {
        "terminationClause": "Not specified in available documentation",
        "refundClause": "Provides credits for data transfer when switching away from AWS",
        "noticeClause": "2-month notice period per EU Data Act requirements",
        "switchingFeesClause": "AWS Blog: 'We're waiving data transfer out to the internet charges for customers who want to move their data out of AWS'"
      }
    },
    {
      "name": "Google Cloud",
      "noticeMonths": 2,
      "terminationFee": "Not Specified",
      "refundPolicy": "Credits/Free Transfer",
      "approach": "Customer-Friendly",
      "keyFeatures": "No switching charges, comprehensive exit procedures",
      "details": "No switching charges imposed. Enhanced switching support with clear exit procedures.",
      "specificClauses": {
        "terminationClause": "Not specified in available documentation",
        "refundClause": "Free data transfer essentials service for switching customers",
        "noticeClause": "2-month notice period per EU Data Act requirements",
        "switchingFeesClause": "No switching charges for the switching process"
      }
    },
    {
      "name": "Microsoft",
      "noticeMonths": 2,
      "terminationFee": "Not Specified",
      "refundPolicy": "Credits/Free Transfer",
      "approach": "Customer-Friendly",
      "keyFeatures": "Free data transfer for switching, following regulatory pressure",
      "details": "Waived data transfer fees in response to EU Data Act. Following regulatory direction.",
      "specificClauses": {
        "terminationClause": "Not specified in available documentation",
        "refundClause": "Waived data transfer fees for switching customers",
        "noticeClause": "2-month notice period per EU Data Act requirements",
        "switchingFeesClause": "Waived data transfer fees for switching following regulatory pressure"
      }
    },
    {
      "name": "Braze",
      "noticeMonths": 2,
      "terminationFee": "Not Specified",
      "refundPolicy": "No Refunds",
      "approach": "Strict",
      "keyFeatures": "Explicit 'No Refunds' policy in addendum",
      "details": "Explicitly states 'No Refunds' in section 8 of their Data Act addendum.",
      "specificClauses": {
        "terminationClause": "Not specified in available excerpt",
        "refundClause": "Section 8: No Refunds - Explicitly stated in Data Act addendum",
        "noticeClause": "2-month notice period per EU Data Act requirements",
        "switchingFeesClause": "Not specified in available documentation"
      }
    },
    {
      "name": "Cloudflare",
      "noticeMonths": 2,
      "terminationFee": "Not Specified",
      "refundPolicy": "Not Specified",
      "approach": "Balanced",
      "keyFeatures": "Standard compliance implementation",
      "details": "Basic compliance addendum covering EU Data Act requirements.",
      "specificClauses": {
        "terminationClause": "Not specified in available documentation",
        "refundClause": "Not specified in available documentation",
        "noticeClause": "2-month notice period per EU Data Act requirements",
        "switchingFeesClause": "Not specified in available documentation"
      }
    },
    {
      "name": "Toggl",
      "noticeMonths": 2,
      "terminationFee": "Not Specified",
      "refundPolicy": "Not Specified",
      "approach": "Balanced",
      "keyFeatures": "Standard compliance implementation",
      "details": "Standard compliance with data portability and switching support.",
      "specificClauses": {
        "terminationClause": "Not specified in available documentation",
        "refundClause": "Not specified in available documentation",
        "noticeClause": "2-month notice period per EU Data Act requirements",
        "switchingFeesClause": "Not specified in available documentation"
      }
    }
  ],
  "summary": {
    "totalCompanies": 11,
    "strictApproach": 4,
    "moderate": 1,
    "customerFriendly": 3,
    "balanced": 3,
    "terminationFeeStats": {
      "fullRemainingTerm": 3,
      "partialRemainingTerm": 1,
      "proportionateFee": 1,
      "notSpecified": 6
    },
    "refundStats": {
      "noRefunds": 4,
      "creditsTransfer": 3,
      "notSpecified": 3,
      "proRatedFees": 1
    }
  }
};

// Global variables
let currentSort = { column: null, direction: 'asc' };
let filteredCompanies = [...companiesData.companies];

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCharts();
    initializeTable();
    initializeFilters();
    initializeCompanyGrid();
    initializeModal();
    initializeClausesTab();
    updateStats();
});

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Chart initialization
function initializeCharts() {
    createTerminationChart();
    createRefundChart();
}

function createTerminationChart() {
    const ctx = document.getElementById('terminationChart').getContext('2d');
    
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
            backgroundColor: ['#B4413C', '#FFC185', '#ECEBD5', '#1FB8CD'],
            borderColor: ['#964325', '#D2BA4C', '#5D878F', '#13343B'],
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
    const ctx = document.getElementById('refundChart').getContext('2d');
    
    const data = {
        labels: ['No Refunds', 'Credits/Free Transfer', 'Not Specified', 'Pro-rated Fees'],
        datasets: [{
            data: [
                companiesData.summary.refundStats.noRefunds,
                companiesData.summary.refundStats.creditsTransfer,
                companiesData.summary.refundStats.notSpecified,
                companiesData.summary.refundStats.proRatedFees
            ],
            backgroundColor: ['#DB4545', '#ECEBD5', '#944454', '#FFC185'],
            borderColor: ['#B4413C', '#D2BA4C', '#13343B', '#964325'],
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
}

function renderTable(companies) {
    const tbody = document.querySelector('#companyTable tbody');
    tbody.innerHTML = '';
    
    companies.forEach(company => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><strong>${company.name}</strong></td>
            <td><span class="approach-badge ${getApproachClass(company.approach)}">${company.approach}</span></td>
            <td>${company.terminationFee}</td>
            <td>${company.refundPolicy}</td>
            <td>${company.noticeMonths} months</td>
            <td><button class="btn btn--sm btn--primary" onclick="showCompanyDetails('${company.name}')">View Details</button></td>
        `;
        
        tbody.appendChild(row);
    });
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

// Company grid for clauses tab
function initializeCompanyGrid() {
    const grid = document.getElementById('companyGrid');
    
    companiesData.companies.forEach(company => {
        const card = document.createElement('div');
        card.className = 'company-card';
        card.onclick = () => showCompanyDetails(company.name);
        
        card.innerHTML = `
            <h4>${company.name}</h4>
            <p><span class="approach-badge ${getApproachClass(company.approach)}">${company.approach}</span></p>
            <p><strong>Termination:</strong> ${company.terminationFee}</p>
            <p><strong>Refunds:</strong> ${company.refundPolicy}</p>
        `;
        
        grid.appendChild(card);
    });
}

// Initialize clauses tab functionality
function initializeClausesTab() {
    const selector = document.getElementById('clauseCompanySelect');
    
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
            document.getElementById('selectedCompanyClauses').style.display = 'none';
        }
    });
}

function showSelectedCompanyClauses(companyName) {
    const company = companiesData.companies.find(c => c.name === companyName);
    if (!company) return;
    
    const container = document.getElementById('selectedCompanyClauses');
    container.style.display = 'block';
    
    let clausesHTML = `
        <h4>${company.name} - Contract Clauses</h4>
        <div class="clause-item">
            <div class="clause-label">
                <span class="clause-icon">📋</span>
                Termination Clause
            </div>
            <div class="clause-text">${company.specificClauses.terminationClause}</div>
        </div>
        
        <div class="clause-item">
            <div class="clause-label">
                <span class="clause-icon">💰</span>
                Refund Policy Clause
            </div>
            <div class="clause-text">${company.specificClauses.refundClause}</div>
        </div>
        
        <div class="clause-item">
            <div class="clause-label">
                <span class="clause-icon">⏰</span>
                Notice Period Clause
            </div>
            <div class="clause-text">${company.specificClauses.noticeClause}</div>
        </div>
        
        <div class="clause-item">
            <div class="clause-label">
                <span class="clause-icon">🔄</span>
                Switching Fees Clause
            </div>
            <div class="clause-text">${company.specificClauses.switchingFeesClause}</div>
        </div>
    `;

    // Add transition clause for Mural
    if (company.name === 'Mural' && company.specificClauses.transitionClause) {
        clausesHTML += `
            <div class="clause-item mural-highlight">
                <div class="clause-label">
                    <span class="clause-icon">🔄</span>
                    Extended Transition Clause (Unique to Mural)
                </div>
                <div class="clause-text">${company.specificClauses.transitionClause}</div>
            </div>
        `;
    }

    container.innerHTML = clausesHTML;
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('companyModal');
    const closeBtn = document.getElementById('modalClose');
    
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
    
    modalName.textContent = `${company.name} - Contract Clauses`;
    
    let modalHTML = `
        <div class="company-overview">
            <div class="detail-item">
                <div class="detail-label">Compliance Approach</div>
                <div class="detail-value">
                    <span class="approach-badge ${getApproachClass(company.approach)}">${company.approach}</span>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Summary</div>
                <div class="detail-value">${company.details}</div>
            </div>
        </div>
        
        <div class="contract-clauses">
            <h4>Contract Clauses</h4>
            
            <div class="clause-item">
                <div class="clause-label">
                    <span class="clause-icon">📋</span>
                    Termination Clause
                </div>
                <div class="clause-text">${company.specificClauses.terminationClause}</div>
            </div>
            
            <div class="clause-item">
                <div class="clause-label">
                    <span class="clause-icon">💰</span>
                    Refund Policy Clause
                </div>
                <div class="clause-text">${company.specificClauses.refundClause}</div>
            </div>
            
            <div class="clause-item">
                <div class="clause-label">
                    <span class="clause-icon">⏰</span>
                    Notice Period Clause
                </div>
                <div class="clause-text">${company.specificClauses.noticeClause}</div>
            </div>
            
            <div class="clause-item">
                <div class="clause-label">
                    <span class="clause-icon">🔄</span>
                    Switching Fees Clause
                </div>
                <div class="clause-text">${company.specificClauses.switchingFeesClause}</div>
            </div>
    `;

    // Add Mural's unique transition clause
    if (company.name === 'Mural' && company.specificClauses.transitionClause) {
        modalHTML += `
            <div class="mural-highlight">
                <h5>🌟 Mural's Unique Extended Transition Period</h5>
                <div class="clause-item">
                    <div class="clause-label">
                        <span class="clause-icon">⏳</span>
                        Extended Transition Clause
                    </div>
                    <div class="clause-text">${company.specificClauses.transitionClause}</div>
                </div>
            </div>
        `;
    }

    modalHTML += `
        </div>
        
        <div class="policy-summary">
            <div class="summary-item">
                <strong>Termination Fee:</strong> ${company.terminationFee}
            </div>
            <div class="summary-item">
                <strong>Refund Policy:</strong> ${company.refundPolicy}
            </div>
            <div class="summary-item">
                <strong>Notice Period:</strong> ${company.noticeMonths} months
            </div>
        </div>
    `;

    modalBody.innerHTML = modalHTML;
    
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
    document.getElementById('total-companies').textContent = companiesData.summary.totalCompanies;
    document.getElementById('strict-count').textContent = companiesData.summary.strictApproach;
    document.getElementById('moderate-count').textContent = companiesData.summary.moderate;
    document.getElementById('friendly-count').textContent = companiesData.summary.customerFriendly;
    document.getElementById('balanced-count').textContent = companiesData.summary.balanced;
}

// Export functionality
function exportTable() {
    const headers = ['Company', 'Approach', 'Termination Fee', 'Refund Policy', 'Notice Period'];
    const rows = filteredCompanies.map(company => [
        company.name,
        company.approach,
        company.terminationFee,
        company.refundPolicy,
        `${company.noticeMonths} months`
    ]);
    
    let csvContent = headers.join(',') + '\n';
    rows.forEach(row => {
        csvContent += row.map(field => `"${field}"`).join(',') + '\n';
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
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