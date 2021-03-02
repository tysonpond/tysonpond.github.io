/* Some class materials differ between Math019A and Math019B. For example,
the syllabus is different (different classroom & time listed). This file renders
the html based on the course section. */

const renderMath19F19QuizItem = function(itemType, i){
	if (([1,2,8].includes(i)) && (itemType != "Quiz Solutions")) {
		return `<td> </td>`;
	}
	else {
		let path = '';
		if (itemType == "Practice"){
			path = "math19AB/math19 quiz" + i + "_prac.pdf";
		}
		else if (itemType == "Practice Solutions"){
			path = "math19AB/math19 quiz" + i + "_prac_sol.pdf";
		}
		else if (itemType == "Quiz Solutions"){
			path = "math19AB/math19 quiz" + i + "_sols.pdf";
		}
		return `<td> <a href="${path}" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>`;
	}
}

const renderMath19F19Quizzes = function(){
		s = `
			<div class="table-container">
				<table>
				<tr> 
					<th> Quiz Number </th>
					<th> Practice </th>
					<th> Practice Solutions </th>
					<th> Quiz Solutions </th>
				</tr>
			</div>`;
		// 9 quizzes
		for (let i=1; i <= 9; i++){
			s+= `<tr> 
				<td> ${i} </td>
				${renderMath19F19QuizItem("Practice", i)}
				${renderMath19F19QuizItem("Practice Solutions", i)}
				${renderMath19F19QuizItem("Quiz Solutions", i)}
				</tr>`;
		}
	s += '</table>';
	return s;
}

const renderMath19F19Exams = function(c){
	return `
		<div class="table-container">
			<table> 
				<tr>
					<th> Exam Number </th>
					<th> Draft Exam </th>
					<th> Details </th>
					<th> Practice </th>
					<th> Practice Solutions </th>
					<th> Exam Solutions </th>
				</tr>
				<tr> 
					<td> 1 </td>
					<td><a href="math19AB/math19 exam1_draft.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> <a href="math19AB/math19 exam1_details.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> <a href="math19AB/math19 exam1_prac.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> <a href="math19AB/math19 exam1_prac_sol.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> <a href="math19AB/math19 exam1sols.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
				</tr>
				<tr> 
					<td> 2 </td>
					<td> </td>
					<td> <a href="math19AB/math19 exam2_details.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> <a href="math19AB/math19 exam2_prac.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> <a href="math19AB/math19 exam2_prac_sol.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> <a href="math19AB/math19 exam2_sols.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
				</tr>
				<tr> 
					<td> Final </td>
					<td> </td>
					<td> <a href="math19${c}/math19 final_exam_details-${c}.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> <a href="math19AB/math19 final_exam_practice_test.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> <a href="math19AB/math19 final_exam_prac_sol.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> </td>
					<td> v1: <a href="math19AB/math19 final_exam_1.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a> |  v2: <a href="math19AB/math19 final_exam_2.pdf" target="_blank"><i class="far fa-file fa-1x"></i></a></td>
				</tr>
			</table>
		</div>`
}

var renderMath19F19 = function(c){
	const Quizzes = renderMath19F19Quizzes();
	const Exams = renderMath19F19Exams(c);
	return	`<h1> MATH 019${c}: Fundamentals of Calculus I </h1>
	<h5> Term: Fall 2019 </h5>
	<h5> Instructor: Tyson Pond </h5>
	<h6> Course description: Fundamentals of Calculus I is the first course in a two-course calculus sequence geared toward
	students majoring in business, life sciences, and social sciences. The focus of this course is on developing an
	understanding of differential calculus and exploring its real-world applications. An introduction to integral
	calculus will also be treated toward the end of the semester. </h6>
	<hr>
	<h2> Course Information </h2>
	<ul>
		<li> <a href="math19${c}/math19${c}_syllabus.pdf" target="_blank"> Syllabus </a> </li>
		<li> <a href="math19${c}/MATH019${c}_Registration.pdf" target="_blank"> MyLab Math Registration </a> </li>
		<li> <a href="https://www.pearsonmylabandmastering.com/northamerica/mymathlab/" target="_blank"> Pearson Website </a> </li>
		<li> <a href="https://www.uvm.edu/sites/default/files/UVM-Policies/policies/acadintegrity.pdf" target="_blank"> Code of Academic Integrity </a> </li>
	</ul>

	<h2> Links </h2>
	<h6> Links to in-class handouts and demos. </h6>
	<ul>
		<li> <a href="https://www.desmos.com/calculator/81ovf2t59q" target="_blank"> Secant line (AROC) & tangent line (IROC)</a>
		</li>
		<li> 
			<a href="math19AB/product_quotient_chain.pdf" target="_blank"> Product, Quotient, & Chain rule Practice</a> |
			<a href="math19AB/product_quotient_chain_sols.pdf" target="_blank"> Solutions </a> 
		</li>
		<li>
			<a href="https://www.desmos.com/calculator/tgyr42ezjq" target="_blank"> Approximating the area under a curve</a>
		</li>
	</ul>

	<h2> Quiz Materials </h2>
	<h6> Note: we did not start practice quizzes until Quiz 3. Quiz 8 did not accompany a practice quiz, but was given as an open book quiz.
	</h6>
	${Quizzes}

	<h2> Exam Materials </h2>
	<h6> Below is a collection of exam materials. There are two versions of each exam, but I merged the files for 
	exam 1 & 2 and NOT the final. The final exam solutions are not presented. Check Blackboard for exam reminders and details.</h6>
	${Exams}
	`;
}