var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + ' / ' + dd + ' / ' + yyyy;


const Header = ({amount, remaining, done}) => {

    return(   
        <div className="header">

            <div className="today__date">
                <span>{today}</span>
            </div>

            <div className="summary__todos">
                <div>
                    <span>{amount} </span>
                    <span>Total</span>
                 </div>
                <div>
                    <span>{remaining <=0 ? "0" : remaining}</span>
                    <span>Remaining</span>
                </div>
                <div>
                    <span>{done <0 ? "0" : done}</span>
                    <span>Done</span>
                </div>
                </div>
        </div> 
    )
}

export default Header;