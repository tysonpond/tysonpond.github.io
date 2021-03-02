const renderMath19S19Quizzes = function(){
	let s = '';
	for (let i=1; i <= 10; i++){
		// We have to append quiz 7 extra credit to string 
		s += `<li> <a href="math19S19/math19 quiz${i}.pdf" target="_blank"> Quiz ${i}</a> |
		<a href="math19S19/math19 quiz${i}_sols.pdf" target="_blank"> Quiz ${i} Solutions</a>`;
		if (i==7){
			s += ` | <a href="math19S19/math19 quiz${i}_extracredit.pdf" target="_blank"> Quiz ${i} Extra Credit</a>`
		}
		s += `</li>`;
	}
	return s;
}

const renderMath19S19Exams = function(){
	let s='';
	s += `<li> <a href="math19S19/math19 exam1.pdf" target="_blank"> Exam 1</a> |
		  <a href="math19S19/math19 exam1_sols.pdf" target="_blank"> Exam 1 Solutions</a> </li>
		  <li> 
		  <a href="math19S19/math19 exam2_details.pdf" target="_blank"> Exam 2 Details</a> |
		  <a href="math19S19/math19 exam2_extra_problems.pdf" target="_blank"> Exam 2 Extra Problems</a> |
		  <a href="math19S19/math19 exam2_notes.pdf" target="_blank"> Exam 2 Lecture Notes</a> |
		  <a href="math19S19/math19 exam2_practice_test.pdf" target="_blank"> Exam 2 Practice</a> | 
		  <a href="math19S19/math19 exam2_practice_test_sols.pdf" target="_blank"> Practice Solutions</a> |
		  <a href="math19S19/math19 exam2-A.pdf" target="_blank"> Exam 2 (A) </a> |
		  <a href="math19S19/math19 exam2-A_sols.pdf" target="_blank"> Solutions (A) </a> | 
		  <a href="math19S19/math19 exam2-B.pdf" target="_blank"> Exam 2 (B) </a> |
		  <a href="math19S19/math19 exam2-B_sols.pdf" target="_blank"> Solutions (B) </a>
		  </li>
		  <li>
		  <a href="math19S19/math19 exam3_details.pdf" target="_blank"> Exam 3 Details</a> |
		  <a href="math19S19/math19 exam3_practice_test.pdf" target="_blank"> Exam 3 Practice</a> | 
		  <a href="math19S19/math19 exam3_practice_test_sols.pdf" target="_blank"> Practice Solutions</a> |
		  <a href="math19S19/math19 exam3_A.pdf" target="_blank"> Exam 3 (A) </a> |
		  <a href="math19S19/math19 exam3_B.pdf" target="_blank"> Exam 3 (B) </a> |
		  <a href="math19S19/math19 exam3_sols.pdf" target="_blank"> Solutions (A&B) </a>
		  </li>
		  <li>
		  <a href="math19S19/math19 final_exam_details.pdf" target="_blank"> Final Exam Details</a> |
		  <a href="math19S19/math19 final_exam_practice_test.pdf" target="_blank"> Final Exam Practice</a> | 
		  <a href="math19S19/math19 final_exam_practice_test_sols.pdf" target="_blank"> Practice Solutions</a> |
		  <a href="math19S19/math19 final_exam_A.pdf" target="_blank"> Final Exam (A) </a> |
		  <a href="math19S19/math19 final_exam_B.pdf" target="_blank"> Final Exam (B) </a>
		  </li>
	 `

	return s;
}

const renderMath19S19 = function(){
	const Quizzes = renderMath19S19Quizzes();
	const Exams = renderMath19S19Exams();
	return `<h1> MATH 019E: Fundamentals of Calculus I </h1>
	<h5> Term: Spring 2019 </h5>
	<h5> Instructor: Tyson Pond </h5>
	<h6> Course description: Fundamentals of Calculus I is the first course in a two-course calculus sequence geared toward
	students majoring in business, life sciences, and social sciences. The focus of this course is on developing an
	understanding of differential calculus and exploring its real-world applications. An introduction to integral
	calculus will also be treated toward the end of the semester. </h6>
	<hr>
	<h2> Course Information </h2>
	<ul>
		<li> <a href="math19S19/math19_S19_syllabus.pdf" target="_blank"> Syllabus </a> </li>
		<li> <a href="math19S19/MATH019_Registration.pdf" target="_blank"> MyLab Math Registration </a> </li>
		<li> <a href="https://www.pearsonmylabandmastering.com/northamerica/mymathlab/" target="_blank"> Pearson Website </a> </li>
		<li> <a href="https://www.uvm.edu/sites/default/files/UVM-Policies/policies/acadintegrity.pdf" target="_blank"> Code of Academic Integrity </a> </li>
	</ul>

	<h2> Miscellaneous </h2>
	<h6> Notes, handouts, activities... </h6>
	<ul>
		<li>
			<a href="math19S19/math19 exercises1.pdf" target="_blank"> Written Homework 1</a> |
			<a href="math19S19/math19 exercises1-sols.pdf" target="_blank"> Brief Solutions</a> |
			<a href="math19S19/math19 exercises1-worked.pdf" target="_blank"> Typed Solutions</a>
		</li>
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