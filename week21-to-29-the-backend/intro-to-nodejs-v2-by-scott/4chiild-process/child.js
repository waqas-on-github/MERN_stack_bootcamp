const cp =require('child_process')


try{

    cp.execSync("code")
    cp.execSync("google-chrome https://discord.com/channels/1057696352890519662/1057698076334247968")
    console.log("code opened");

}
catch(error) {
    console.log(error)
}

// more about this module later