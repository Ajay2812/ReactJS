import chefLogo from "/Images/chef.png"
export default function Header(){
    return(
        <header>
            <img src={chefLogo} alt="Chef Logo"></img>
            <h1>Chef Claude</h1>
        </header>
    )
}