const renderHomework = function(){
	let s = '';
	for (let i=1; i <= 8; i++){
		s += `<li> <a href="math17F18/math17_hw${i}.pdf" target="_blank"> Homework ${i}</a> |
		<a href="math17F18/math17_hw${i}_solution.pdf" target="_blank"> Homework ${i} Solutions</a></li>`;
	}
	return s;
}

const renderQuizzes = function(){
	let s = '';
	for (let i=1; i <= 6; i++){
		s += `<li> <a href="math17F18/math17quiz${i}.pdf" target="_blank"> Quiz ${i}</a> |
		<a href="math17F18/math17quiz${i}solution.pdf" target="_blank"> Quiz ${i} Solutions</a></li>`;
	}
	return s;
}

const renderExams = function(){
	let s = '';
	/* exams 1 and 2 */
	for (let i=1; i <= 2; i++){
		/* for exam 2, prepend extra exam materials */
		s += `<li>`
		if (i==2) {
			s+=`<a href="math17F18/math17exam${i}_details.pdf" target="_blank"> Exam ${i} Details</a> | 
			<a href="math17F18/math17exam${i}_formula_sheet.pdf" target="_blank"> 
			Exam ${i} Formula Sheet</a> |`;
		}
	 	s += `<a href="math17F18/math17exam${i}.pdf" target="_blank"> Exam ${i}</a> |
	 	 <a href="math17F18/math17exam${i}_solution.pdf" target="_blank"> 
	 	 Exam ${i} Solutions</a> </li>`;
	}
	/* final exam */
	s += `<li> <a href="math17F18/math17final_practice.pdf" target="_blank"> Final Exam Practice</a> | 
			<a href="math17F18/math17final_practice_solution.pdf" target="_blank"> 
			Practice Solutions</a> |
			<a href="math17F18/math17final_exam.pdf" target="_blank"> Final Exam</a> </li>`
	return s;
}

const renderMath17F18 = function(){
	const HW = renderHomework(); 
	const Quizzes = renderQuizzes();
	const Exams = renderExams();
	return `<h1> MATH 017B: Applications of Finite Math </h1>
	<h5> Term: Fall 2018 </h5>
	<h5> Instructor: Tyson Pond </h5>
	<h6> Course description:  Introduction to mathematics of finite systems 
	with applications, such as probability, statistics, graph theory, 
	fair division and apportionment problems, voting systems. </h6>
	<hr>
	<h2> Course Information </h2>
	<ul>
		<li> <a href="math17F18/math17_syllabus.pdf" target="_blank"> Syllabus </a> </li>
		<li> <a href="https://www.uvm.edu/sites/default/files/UVM-Policies/policies/acadintegrity.pdf" target="_blank"> Code of Academic Integrity </a> </li>
	</ul>

	<h2> Miscellaneous </h2>
	<h6> Notes, handouts, activities... </h6>
	<ul>
		<li>
			<a href="math17F18/math17notes8-27.pdf" target="_blank"> Week 1 Lecture Notes</a> (for those who added the course late)
		</li>
		<li> 
			<a href="math17F18/math17questionnaire.pdf" target="_blank"> Questionnaire </a> |
			<a href="math17F18/math17questionnaire_results.pdf" target="_blank"> Visualizing Class Data! </a> 
		</li>
	</ul>

	<h2> Homework </h2>
	<h6> Homeworks are not graded, but are highly recommended as practice for the quizzes. </h6>
	<ul>
		${HW}
	</ul>
	<h2> Quiz Materials </h2>
	<ul>
		${Quizzes}
	</ul>

	<h2> Exam Materials </h2>
	<h6> Check Blackboard for exam reminders and details. </h6>
	<ul>
		${Exams}
	</ul>
	`;
}