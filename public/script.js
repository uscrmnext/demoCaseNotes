document.addEventListener('DOMContentLoaded', updateNote)
// document.addEventListener('DOMContentLoaded', displayExcel)

const templates = {
        'Disputed Credit Card Transaction': `
    <h3><u>Credit Card Dispute</u></h3>
    1. Immediately block this card to prevent any further fraudulent charges.
    <br>
    <br>
    2. Before submitting the dispute, ensure the customer/member has already called the merchant to inquire about the charge.
    <br>
    <br>
    3. Inform customer/member it will take up to 10 business days to receive provisional credit for this charge
    <br>
    <br>
    <strong>Links</strong>
    
    <ul>
      <li><a href="https://crmnext.us" target="_blank"> Policy and Procedures Manual</a></li>
      <li><a href="https://crmnext.us" target="_blank"> Policy and Procedures Manual</a></li>
      <li><a href="https://crmnext.us" target="_blank"> Policy and Procedures Manual</a></li>
      <li><a href="https://crmnext.us" target="_blank"> Policy and Procedures Manual</a></li>
    </ul>

    `,
    'Disputed Debit Card Transaction': `
    <h3><u>Debit Card Dispute</u></h3>
    1. Immediately block this card to prevent any further fraudulent charges.
    <br>
      <br>
        2. Before submitting the dispute, ensure the customer/member has already called the merchant to inquire about the charge.
        <br>
          <br>
            3. Inform customer/member it will take up to 10 business days to receive provisional credit for this charge
            <br>
              <br>
                <strong>Links</strong>
                <ul>
                  <li><a href="https://crmnext.us" target="_blank"> Policy and Procedures Manual</a></li>
                  <li><a href="https://crmnext.us" target="_blank"> Policy and Procedures Manual</a></li>
                  <li><a href="https://crmnext.us" target="_blank"> Policy and Procedures Manual</a></li>
                  <li><a href="https://crmnext.us" target="_blank"> Policy and Procedures Manual</a></li>
                </ul>
    `,
    'Auto Loan': 'Auto Loan Test'
    }


function updateNote() {
    const dmsNoteTarget = document.getElementById('dmsNoteTarget')

    var subject = ''

    const caseSubject = document.getElementsByName('CASE_SUBCATEGORY1')[0]
    const leadSubject = document.getElementsByName('cust_6055')[0]

    if(caseSubject){
      subject = caseSubject.value
    }

    if (leadSubject) {
        subject = leadSubject.value
    }


    if(templates[subject]){
        dmsNoteTarget.innerHTML = templates[subject]
    } else {
        dmsNoteTarget.innerHTML = 'No Note!'
    }



    
}

// async function displayExcel(){
  
//   const url = 'https://crmnextus-gold8-dms-scripts.s3.amazonaws.com/Note+Templates.xlsx'
  
//   const file = await (await fetch(url)).arrayBuffer()

//   const workbook = XLSX.read(file);

//   const worksheet = workbook.Sheets[workbook.SheetNames[0]]

//   const rawData = XLSX.utils.sheet_to_json(worksheet)
//   console.log(rawData)

//   const output = rawData.filter(item => item.Subject == 'Auto Loan')
  

//   document.getElementById('excelNoteTarget').innerHTML = output[0].Description

// }
