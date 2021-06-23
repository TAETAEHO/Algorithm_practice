/*
1. DFS를 연습한다.
    1-1. 트리구조로 되어있는 노드들을 DFS로 조건에 맞게 출력해보자.
*/

// Solution 1. 재귀함수를 이용한 구현1
let dfs = (node) => {
	// 최종적으로 출력해줄 배열 변수가 필요하다.
	let result = [];

	// 자식노드가 있는지 확인하기 위해서 재귀적으로 돌려줘야한다. 
	let checkNode = (node) => {
		// node.children 있는지 확인한다.
		if(node.children) {
			// 값이 있으면 node.value를 result 배열에 넣어준다.
			result.push(node.value);

			// 자식이 있으니까 for문으로 node.children의 길이만큼 탐색해서 재귀적으로 돌려줘야한다.
			for(let i=0; i<node.children.length; i++) {
				// i번째 요소를 재귀적으로 계속 보낸다.
				checkNode(node.children[i]);
			}
		} else {
				// node.children이 없는 경우에도 그냥 result에 node.value를 넣어준다.
				result.push(node.value);
			} 
	}
	// checkNode를 호출해준다.
	checkNode(node);
	// 최종 result 변수를 리턴한다.
	return result;
};

let Node = (value) => {
	this.value = value;
	this.children = [];
};

Node.prototype.addChild = (child) => {
	this.children.push(child);
	return child;
}

// Solution 2. 재귀를 이용한 구현2
let dfs = (node) => {
	// 최종적으로 출력해줄 배열 변수가 필요하다. -> 첫번째 요소로 root 노드를 담아둔다.
	let result = [node.value];

    // node.chidren 배열을 탐색해서 재귀적으로 돌린다.
    node.children.forEach(el => {
        // 요소 하나씩 탐색하면서 result에 concatenate 해준다.
        result = result.concat(dfs(el));
    });

    // 최종 result를 리턴한다.
    return result;
};

let Node = (value) => {
	this.value = value;
	this.children = [];
};

Node.prototype.addChild = (child) => {
	this.children.push(child);
	return child;
}