function saturdayFun(activity="roller-skate") {
    let result
    result = `This Saturday, I want to ${activity}!`;
    return result;
 }

 const mondayWork = function(activity="go to the office") {
     let result
     result = `This Monday, I will ${activity}.`;
     return result;
 }

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}