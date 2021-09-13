const template = ({ address, balance }) => `
    <div class="address">
        Address: ${address}
    </div>
    <div class="balance">
        Balance: ${balance} 
       
    </div>
    <div class="play" id="play">
       play
    </div>  
    <div class="logout" id="logout">
        logout
        </div>  
        <div class="join" id="join">
            join    
    </div> 
`;

async function renderAccount(props, decrementHandler, joinHandler, logoutHandler) {
    const html = template(props);
    document.getElementById("account").innerHTML = html;
    document.getElementById("play").addEventListener('click', () => {
        decrementHandler();
    });
    //document.getElementById("join").innerHTML = html;
    document.getElementById("join").addEventListener('click', () => {
        joinHandler();
    });
   
    document.getElementById("logout").addEventListener('click', () => {
        logoutHandler();
    });
}

export default renderAccount;