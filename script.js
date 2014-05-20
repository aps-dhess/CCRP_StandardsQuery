$(document).ready(function(){

var igListOrig = [

{"IG":"Problem Solving", "AIR_Indicators": "All Domain 1 Indicators* 3.1, 3.2, 3.3, 3.4", "SMP": "SMP 1, 2, 3, 4, 5, 6, 7, and 8", "Purpose": "Students must be able to reason, problem solve, communicate and make real life       decisions that require mathematical thinking.  Teaching students problem solving skills and giving them opportunities to apply their skills is critical to developing their capacity to solve mathematical problems that arise in all our lives (e.g. starting a small business, figuring out the area of a room in order to purchase the correct amount of paint, filling out a tax return, tracking and setting goals for investments, etc.)", "IP":"Problem of the Week(PoW)", "What": "PoWs are omplex problems that students solve and then explain their solutions and reasoning in a write up.  More weight should be given to mathematical thinking and a good write up than finding the correct solution.", "When": "PoWs should be administered once per month.  Students should work on problem the first 10-15 minutes of a period for 5-7 consecutive days.", "How": "1.Introduce problem, process, and rubric. 2.Students are given time in class to work on problem throughout the week. 3.Students complete write up. 4.Student peer edit write up. 5.Students revise write up", "formative": "Problem of the Week Problem of the Month, Mathematics Assessment Resources Services Tasks, Formative Assessment Lessons", "summative": "End of Unit Assessment, Performance Task, Aspire Benchmakr"},

{"IG":"Problem Solving", "AIR_Indicators": "All Domain 1 Indicators* 3.1, 3.2, 3.3, 3.4", "SMP": "SMP 1, 2, 3, 4, 5, 6, 7, and 8", "Purpose": "Students must be able to reason, problem solve, communicate and make real life       decisions that require mathematical thinking.  Teaching students problem solving skills and giving them opportunities to apply their skills is critical to developing their capacity to solve mathematical problems that arise in all our lives (e.g. starting a small business, figuring out the area of a room in order to purchase the correct amount of paint, filling out a tax return, tracking and setting goals for investments, etc.)", "IP":"Problem of the Month (POM)", "What": "The POMs are divided into five levels, A through E, to allow access and scaffolding for the students into the different aspects of the problem and to stretch students to go deeper into mathematical complexity.  Students are asked to explain their solutions and reasoning in a write up.", "When": "PoMs should be administered once per month.  Students should work on problem the first 10-15 minutes of a period for 5-7 consecutive days. ", "How": "1.Introduce problem, process, and rubric. Begin with problem A and have students progress through the problems. 2.Students are given time in class to work on problem throughout the week. 3.Students complete write up.4.  Student peer edit write up. 5.Students revise write up."},

 {"IG":"Problem Solving", "AIR_Indicators": "All Domain 1 Indicators* 3.1, 3.2, 3.3, 3.4", "SMP": "SMP 1, 2, 3, 4, 5, 6, 7, and 8", "Purpose": "Students must be able to reason, problem solve, communicate and make real life       decisions that require mathematical thinking.  Teaching students problem solving skills and giving them opportunities to apply their skills is critical to developing their capacity to solve mathematical problems that arise in all our lives (e.g. starting a small business, figuring out the area of a room in order to purchase the correct amount of paint, filling out a tax return, tracking and setting goals for investments, etc.)", "IP":"Formative Assessment Lesson (FAL)", "What": "FALs consist of 3 parts including a pre-assessment (approximately 15 min. done individually), a lesson activity worked on in homogeneous groups or partners, and a post lesson discussion & post assessment.  The FAL will help identify how well students are making conceptual sense of the unit material.", "When": "The 3 part cycle is intended to be given approximately two-thirds the way into a unit of study.", "How": "1.Pre assessment. 2.Introduce activity. 3.Students work collaboratively. 4.Whole class discussion/ presentation. 5.Post assessment."},

{"IG":"Problem Solving", "AIR_Indicators": "All Domain 1 Indicators* 3.1, 3.2, 3.3, 3.4", "SMP": "SMP 1, 2, 3, 4, 5, 6, 7, and 8", "Purpose": "Students must be able to reason, problem solve, communicate and make real life       decisions that require mathematical thinking.  Teaching students problem solving skills and giving them opportunities to apply their skills is critical to developing their capacity to solve mathematical problems that arise in all our lives (e.g. starting a small business, figuring out the area of a room in order to purchase the correct amount of paint, filling out a tax return, tracking and setting goals for investments, etc.)", "IP":"Formative Assessment Lesson (FAL)", "What": "MARS tasks are scaffolded formative assessment tasks. ", "When": "MARs should be used at the start of each unit with the option of ending the unit with an additional MARs task", "How": "1.Describe. 2.Restate"}

];

var ips = [];
for(var i in igListOrig) {
        var ip = '<div class="cube"><h4>Instructional Practice</h4><center><h3>' + igListOrig[i].IP +'</h3></center></br><p><span class="description">What: </span>'+ igListOrig[i].What + '<p></br> <p><span class="description"> When:</span> '+ igListOrig[i].When +'<p></br><p><span class="description">How:</span> '+igListOrig[i].How+'</p></br></div>';

        var i

        if($.inArray(ip,ips)==-1){
            ips.push(ip);
        }
    }

$('.middle').html(igListOrig[0].IG);
$('#air-indicators').html(igListOrig[0].AIR_Indicators)
$('#math-standards').html(igListOrig[0].SMP)
$('#description-text').html(igListOrig[0].Purpose)
$(".bottom-container").append(ips);
$("#formative-bullets").html(igListOrig[0].formative)
$("#summative-bullets").html(igListOrig[0].summative)


})


