document.addEventListener('DOMContentLoaded', updateNote)

async function updateNote() {
    const dmsNoteTarget = document.getElementById('dmsNoteTarget')

    var subject = ''

    const caseSubject = document.getElementsByName('CASE_SUBCATEGORY1')[0]
    const leadSubject = document.getElementsByName('cust_6055')[0]

    if (caseSubject) {
        subject = caseSubject.value
    }

    if (leadSubject) {
        subject = leadSubject.value
    }

    const url = 'https://crmnextus-gold8-dms-scripts.s3.amazonaws.com/Note+Templates.xlsx'

    try {
        const file = await (await fetch(url)).arrayBuffer()

        const workbook = XLSX.read(file)

        const worksheet = workbook.Sheets[workbook.SheetNames[0]]

        const rawData = XLSX.utils.sheet_to_json(worksheet)

        const output = rawData.filter((item) => item.Subject == subject)
        console.log(output)

        if (output) {
            dmsNoteTarget.innerHTML = output[0].Description
        } else {
            dmsNoteTarget.innerHTML = 'No Note!'
        }
    } catch (err) {
        console.log(err)
    }

    return 'Success'
}
