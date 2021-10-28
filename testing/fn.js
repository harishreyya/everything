function seconds(a){
return Math.floor(a/1000);
}

function minutes(a){
    return Math.floor(a/(1000*60))
    }
    function hours(a){
        return (a/(1000*60*60));
        }
module.exports = {seconds, minutes,hours};
