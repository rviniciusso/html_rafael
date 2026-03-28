const teste = () => {
    document.getElementById("#teste").innerText += "A"  
}

const blateral = () => {

    if (document.getElementById("#lateral").style.display == 'none'){
        document.getElementById("#lateral").style.display =  'block'
    }else{
            document.getElementById("#lateral").style.display =  'none'

    }
}