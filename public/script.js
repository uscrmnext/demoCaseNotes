document.addEventListener('DOMContentLoaded', updateNote)

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
    < br >
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
    `
    }


function updateNote() {
    const dmsNoteTarget = document.getElementById('dmsNoteTarget')
    const caseSubject = document.getElementsByName('CASE_SUBCATEGORY1')[0].value

    if(templates[caseSubject]){
        dmsNoteTarget.innerHTML = templates[caseSubject]
    } else {
        dmsNoteTarget.innerHTML = 'No Note!'
    }

    
}
