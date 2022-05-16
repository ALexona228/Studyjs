const buttonMY={
    text: 'info'
}

const buttonYou={
    color: 'red',
    width: 200,
    height: 300
}

const Button ={
    ...buttonMY,
    ...buttonYou
}

console.table(Button)
