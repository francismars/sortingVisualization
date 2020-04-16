const SELECTIONSORT = "<ul><li>Selection sort has an O(n^2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. </li><li> Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited. </li><li> The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.</li></ul>"
const BUBBLESORT = "<ul><li>Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. </li><li> Bubble sort has a worst-case and average complexity of O(n^2), where n is the number of items being sorted. Most practical sorting algorithms have substantially better worst-case or average complexity, often O(n log n). Even other O(n^2) sorting algorithms, such as insertion sort, generally run faster than bubble sort, and are no more complex. Therefore, bubble sort is not a practical sorting algorithm. </li></ul>"
const INSERTIONSORT = "<ul><li>Insertion sort is a simple sorting algorithm that builds the final sorted or list one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.</li><li> Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain. </li><li> The best case input is an array that is already sorted. In this case insertion sort has a linear running time (O(n)). The simplest worst case input is an array sorted in reverse order.  This gives insertion sort a quadratic running time (O(n^2)). The average case is also quadratic, which makes insertion sort impractical for sorting large arrays. However, insertion sort is one of the fastest algorithms for sorting very small arrays, even faster than quicksort. </li></ul>"

const LISTSIZE = 200
const WIDTH = 800
const HEIGHT = 600
let listIndex = 0
let volley = 0
let smaller = 0
let list = []
let algorithm = "SelectionSort"

function initializeList () {
	list = []
	for (j=0;j<LISTSIZE;j++) {
		list.push(Math.random())
	}
}

function swap(listIndex, smaller) {
	let temp = list[listIndex]
	list[listIndex]=list[smaller]
	list[smaller]=temp	
}

function selectionSort(){
	fill('green')
	rect((listIndex*(WIDTH/LISTSIZE)), HEIGHT, (WIDTH/LISTSIZE), -(list[listIndex]*HEIGHT/2))		
	fill('blue')
	rect((smaller*(WIDTH/LISTSIZE)), HEIGHT, (WIDTH/LISTSIZE), -(list[smaller]*HEIGHT/2))			
	fill('red')
	rect((volley*(WIDTH/LISTSIZE)), HEIGHT, (WIDTH/LISTSIZE), -(list[volley]*HEIGHT/2))	
	
	for (k in list){
		noFill()
		rect((k*(WIDTH/LISTSIZE)), HEIGHT, (WIDTH/LISTSIZE), -(list[k]*HEIGHT/2))								
	}				

	if(list[volley]<list[smaller]){
		smaller=volley
	}
	volley++
	if(volley==LISTSIZE){
		swap(listIndex,smaller)
		listIndex++
		smaller = listIndex
		volley = listIndex
	}	
}

function bubbleSort(){
	fill('red')
	rect((volley*(WIDTH/LISTSIZE)), HEIGHT, (WIDTH/LISTSIZE), -(list[volley]*HEIGHT/2))	
	fill('blue')
	rect(((volley+1)*(WIDTH/LISTSIZE)), HEIGHT, (WIDTH/LISTSIZE), -(list[volley+1]*HEIGHT/2))	
	for (k in list){
		noFill()
		rect((k*(WIDTH/LISTSIZE)), HEIGHT, (WIDTH/LISTSIZE), -(list[k]*HEIGHT/2))								
	}		
	if(list[volley]>list[volley+1]){
		swap(volley,volley+1)
		swapped=true		
	}
	volley++
	if(volley==LISTSIZE && swapped==true){	
		volley=0
		swapped=false
	}
}

function insertionSort() {
	fill('red')
	rect((volley*(WIDTH/LISTSIZE)), HEIGHT, (WIDTH/LISTSIZE), -(list[volley]*HEIGHT/2))		
	for (k in list){
		noFill()
		rect((k*(WIDTH/LISTSIZE)), HEIGHT, (WIDTH/LISTSIZE), -(list[k]*HEIGHT/2))								
	}
	for(j=0;j<volley;j++){
		if(list[volley]<=list[j]){
			list.splice(j, 0, list[volley])
			list.splice(volley+1, 1)
			break
		}
	}
	volley++
}

function changeAlgorithm(){
	let choice = sel.value()
	if (choice=='Selection Sort'){
		listIndex = 0
		volley = 0
		smaller = 0
		algorithm="SelectionSort"
		explanation.html(SELECTIONSORT)
		initializeList()
		
	}
	if (choice=='Bubble Sort'){
		listIndex = -1
		volley = 0
		smaller = -1
		algorithm="BubbleSort"
		explanation.html(BUBBLESORT)
		initializeList()				
	}	
	if (choice=='Insertion Sort'){
		listIndex = 0
		volley = 1
		smaller = -1
		algorithm="InsertionSort"
		explanation.html(INSERTIONSORT)
		initializeList()				
	}
}

function setup() {
	createCanvas(WIDTH, HEIGHT);
	initializeList()
	
	sel = createSelect();
	sel.position(WIDTH + 150, 10);
	sel.option('Selection Sort');
	sel.option('Bubble Sort');
	sel.option('Insertion Sort');
	sel.changed(changeAlgorithm);
	
	explanation = createDiv('').size(400, 100);
	explanation.position(WIDTH + 30, 30);
	explanation.html(SELECTIONSORT)
	
}

function draw() {
	clear()	
	if (algorithm=="SelectionSort"){
		selectionSort()		
	}
	else if (algorithm=="BubbleSort"){
		bubbleSort()		
	}
	else if (algorithm=="InsertionSort"){
		insertionSort()		
	}	
}









