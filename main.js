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
		initializeList()
		
	}
	if (choice=='Bubble Sort'){
		listIndex = -1
		volley = 0
		smaller = -1
		algorithm="BubbleSort"
		initializeList()				
	}	
	if (choice=='Insertion Sort'){
		listIndex = 0
		volley = 1
		smaller = -1
		algorithm="InsertionSort"
		initializeList()				
	}
}

function setup() {
	createCanvas(WIDTH, HEIGHT);
	initializeList()
	
	sel = createSelect();
	sel.position(WIDTH+ 10, 10);
	sel.option('Selection Sort');
	sel.option('Bubble Sort');
	sel.option('Insertion Sort');
	sel.changed(changeAlgorithm);
	
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









