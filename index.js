document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu li')

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            menuItems.forEach(menuItem => menuItem.classList.remove('selected'))
            menuItem.classList.add('selected')
        })
    })

    setupButtons()
})

function setupButtons() {
    const uniteCourses = document.getElementById('unite-courses')
    const uniteMooc = document.getElementById('unite-mooc')
    const uniteJointProgrammes = document.getElementById('unite-joint-programmes')
    const uniteDoctoralSchoolOfferings = document.getElementById('unite-doctoral-school-offerings')
    const uniteExtraCurricularActivities = document.getElementById('unite-extra-curricular-activities')
    const uniteStaff = document.getElementById('unite-staff')

    uniteCourses.onclick = () => navigateTo(uniteCourses.dataset.url, uniteCourses.dataset.domain)
    uniteMooc.onclick = () => navigateTo(uniteMooc.dataset.url, uniteMooc.dataset.domain)
    uniteJointProgrammes.onclick = () => navigateTo(uniteJointProgrammes.dataset.url, uniteJointProgrammes.dataset.domain)
    uniteDoctoralSchoolOfferings.onclick = () => navigateTo(uniteDoctoralSchoolOfferings.dataset.url, uniteDoctoralSchoolOfferings.dataset.domain)
    uniteExtraCurricularActivities.onclick = () => navigateTo(uniteExtraCurricularActivities.dataset.url, uniteExtraCurricularActivities.dataset.domain)
    uniteStaff.onclick = () => navigateTo(uniteStaff.dataset.url, uniteStaff.dataset.domain)
}

function navigateTo(url, domain=null) {
    const agora = document.querySelector('agora-component')

    if (domain && agora.domain !== domain) {
        agora.domain = domain
    }

    agora.navigateTo(url, domain ? domain : null)
}