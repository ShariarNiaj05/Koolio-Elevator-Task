

const elevator = document.getElementById('elevator');
const buttons = document.querySelectorAll('button');

let currentLevel = 0;

function pressButton(direction, targetLevel) {
    const targetPosition = targetLevel * 100; // Adjust based on the layout
    const time = Math.abs(currentLevel - targetLevel) * 5000; // Adjust timing

    elevator.style.transition = `transform ${time}ms ease-in-out`;
    elevator.style.transform = `translateY(${targetPosition}px)`;

    // After the movement, reset transition and update the current level
    setTimeout(() => {
        elevator.style.transition = '';
        currentLevel = targetLevel;
        console.log(`Elevator reached Level ${currentLevel + 1}`);
    }, time);
}
