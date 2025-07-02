//Question 1
function getUser(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            if (data.name) {
                console.log(`Name: ${data.name}`);
            } else {
                console.log('User not found');
            }
        })
        .catch(err => console.log('Error:', err.message));
}

//getUser(6);

//Question 2
function getPost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => {
            if (data.title) {
                console.log(`Post title: ${data.title}`);
            } else {
                console.log('User not found');
            }
        })
        .catch(err => console.log('Error:', err.message));
}

//getPost(3);

//Question 3
function getUserEmail(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.email) {
                console.log(`Users email: ${data.email}`);
            } else {
                console.log('User not found');
            }
        })
        .catch(err => console.log('Error:', err.message));
}

//getUserEmail(7);

//Question 4
function listUserTodos(userId) {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(res => res.json())
        .then(data => {
            if (data) {
                console.log(`User ${userId} has ${data.length} todos`);
            } else {
                console.log('User not found');
            }
        })
        .catch(err => console.log('Error:', err.message));
}

//listUserTodos(9);

//Question 5
function checkPostExists(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                console.log("Post exists");
            } else {
                console.log('Post not found');
            }
        })
        .catch(err => console.log('Error:', err.message));
}

//checkPostExists(101);

//Question 6
function fetchWithDelay(url, delay) {
    setTimeout(() => {
        fetch(url)
            .then(res => res.text())
            .then(data => {
                if (data) {
                    console.log(data.slice(0, 50));
                } else {
                    console.log('User not found');
                }
            })
            .catch(err => console.log('Error:', err.message));
    }, delay);
}

//fetchWithDelay(`https://jsonplaceholder.typicode.com/users/6`, 2000);

//Question 7
function showKeys(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                console.log(Object.keys(data));
            } else {
                console.log('Object not found');
            }
        })
        .catch(err => console.log('Error:', err.message));
}

showKeys(`https://jsonplaceholder.typicode.com/users/8`);
