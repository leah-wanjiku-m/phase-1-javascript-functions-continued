// code your solution here
function saturdayFun(activity ="roller-skate"){
return `This Saturday, I want to ${activity}!` ;
}
function  mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`;
}
saturdayFun("bathe my dog");
mondayWork("work from home");
function wrapAdjective(wrap="*"){
  const result=function(hard="a hard worker"){
    return `You are ${wrap}${hard}${wrap}!`;
  }
  return result;
}