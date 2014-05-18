$(document).ready(function(){

var source = $("#template").html();
var template = Handlebars.compile(source);

var igListOrig = [

{"IG":"Problem Solving", "AIR_Indicators": "All Domain 1 Indicators* 3.1, 3.2, 3.3, 3.4", "SMP": "SMP 1, 2, 3, 4, 5, 6, 7, and 8", "Purpose": "Students must be able to reason, problem solve, communicate and make real life       decisions that require mathematical thinking.  Teaching students problem solving skills and giving them opportunities to apply their skills is critical to developing their capacity to solve mathematical problems that arise in all our lives (e.g. starting a small business, figuring out the area of a room in order to purchase the correct amount of paint, filling out a tax return, tracking and setting goals for investments, etc.)", "IP":"Problem of the Week(PoW)", "What": "PoWs are omplex problems that students solve and then explain their solutions and reasoning in a write up.  More weight should be given to mathematical thinking and a good write up than finding the correct solution.", "When": "PoWs should be administered once per month.  Students should work on problem the first 10-15 minutes of a period for 5-7 consecutive days.", "How": "1.Introduce problem, process, and rubric. 2.Students are given time in class to work on problem throughout the week. 3.Students complete write up. 4.Student peer edit write up. 5.Students revise write up" },

{"IG":"Problem Solving", "AIR_Indicators": "All Domain 1 Indicators* 3.1, 3.2, 3.3, 3.4", "SMP": "SMP 1, 2, 3, 4, 5, 6, 7, and 8", "Purpose": "Students must be able to reason, problem solve, communicate and make real life       decisions that require mathematical thinking.  Teaching students problem solving skills and giving them opportunities to apply their skills is critical to developing their capacity to solve mathematical problems that arise in all our lives (e.g. starting a small business, figuring out the area of a room in order to purchase the correct amount of paint, filling out a tax return, tracking and setting goals for investments, etc.)", "IP":"Problem of the Month (POM)", "What": "The POMs are divided into five levels, A through E, to allow access and scaffolding for the students into the different aspects of the problem and to stretch students to go deeper into mathematical complexity.  Students are asked to explain their solutions and reasoning in a write up.", "When": "PoMs should be administered once per month.  Students should work on problem the first 10-15 minutes of a period for 5-7 consecutive days. ", "How": "1.Introduce problem, process, and rubric. Begin with problem A and have students progress through the problems. 2.Students are given time in class to work on problem throughout the week. 3.Students complete write up.4.  Student peer edit write up. 5.Students revise write up." },

 {"IG":"Problem Solving", "AIR_Indicators": "All Domain 1 Indicators* 3.1, 3.2, 3.3, 3.4", "SMP": "SMP 1, 2, 3, 4, 5, 6, 7, and 8", "Purpose": "Students must be able to reason, problem solve, communicate and make real life       decisions that require mathematical thinking.  Teaching students problem solving skills and giving them opportunities to apply their skills is critical to developing their capacity to solve mathematical problems that arise in all our lives (e.g. starting a small business, figuring out the area of a room in order to purchase the correct amount of paint, filling out a tax return, tracking and setting goals for investments, etc.)", "IP":"Formative Assessment Lesson (FAL)", "What": "FALs consist of 3 parts including a pre-assessment (approximately 15 min. done individually), a lesson activity worked on in homogeneous groups or partners, and a post lesson discussion & post assessment.  The FAL will help identify how well students are making conceptual sense of the unit material.", "When": "The 3 part cycle is intended to be given approximately two-thirds the way into a unit of study.", "How": "1.Pre assessment. 2.Introduce activity. 3.Students work collaboratively. 4.Whole class discussion/ presentation. 5.Post assessment." },


 {"IG":"Problem Solving", "AIR_Indicators": "All Domain 1 Indicators* 3.1, 3.2, 3.3, 3.4", "SMP": "SMP 1, 2, 3, 4, 5, 6, 7, and 8", "Purpose": "Students must be able to reason, problem solve, communicate and make real life       decisions that require mathematical thinking.  Teaching students problem solving skills and giving them opportunities to apply their skills is critical to developing their capacity to solve mathematical problems that arise in all our lives (e.g. starting a small business, figuring out the area of a room in order to purchase the correct amount of paint, filling out a tax return, tracking and setting goals for investments, etc.)", "IP":"Formative Assessment Lesson (FAL)", "What": "FALs consist of 3 parts including a pre-assessment (approximately 15 min. done individually), a lesson activity worked on in homogeneous groups or partners, and a post lesson discussion & post assessment.  The FAL will help identify how well students are making conceptual sense of the unit material.", "When": "The 3 part cycle is intended to be given approximately two-thirds the way into a unit of study.", "How": "1.Pre assessment. 2.Introduce activity. 3.Students work collaboratively. 4.Whole class discussion/ presentation. 5.Post assessment." },
//
//{"IG":"Problem Solving", "AIR_Indicators": "All Domain 1 Indicators* 3.1, 3.2, 3.3, 3.4", "SMP": "SMP 1, 2, 3, 4, 5, 6, 7, and 8", "Purpose": "Students must be able to reason, problem solve, communicate and make real life       decisions that require mathematical thinking.  Teaching students problem solving skills and giving them opportunities to apply their skills is critical to developing their capacity to solve mathematical problems that arise in all our lives (e.g. starting a small business, figuring out the area of a room in order to purchase the correct amount of paint, filling out a tax return, tracking and setting goals for investments, etc.)", "IP":"Formative Assessment Lesson (FAL)", "What": "MARS tasks are scaffolded formative assessment tasks. ", "When": "MARs should be used at the start of each unit with the option of ending the unit with an additional MARs task", "How": "1.Describe. 2.Restate" }

];

var ips = [];

for(var i in igListOrig) {
        var ip = '<div class="igText"><li>'+igListOrig[i].IP+'</li><li>What: '+igListOrig[i].What+'</li><li>When: '+igListOrig[i].When+'</li><li>How: '+igListOrig[i].How+'</li><div><br/>';
        console.log(ip)
        if($.inArray(ip,ips)==-1){
            ips.push(ip);
        }
    }

    $('#igTitle').html(igListOrig[0].IG);
    $("#test").append(ips);


var igData = {}
igData.instructionalGuides = igListOrig;

// Handlebars.registerHelper('process', function (data, options){
//   return options.fn(data.instructionalGuides[0])
//   console.log(data)
// }

$('body').append(template(igData.instructionalGuides[0]));
// $('.row split').append(template(igData.instructionalGuides[0]));


})


