// Список курсов
const courses = [
    { name: "Courses in England", prices: [0, 100] },  
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
const requiredRange1 = [null, 200];
const requiredRange2 = [100, 350];
const requiredRange3 = [200, null];

function filterCourses(courses, [start, end]) {
    return courses.filter(({prices: [priceStart, priceEnd]}) => {
        if (start !== null && priceEnd !== null && start > priceEnd) {//исключаем курсы выходящие за нижнюю границу искомой цены
            return false;
        }
        if (end !== null && priceStart !== null && end < priceStart) {//исключаем курсы выходящие за верхнюю границу искомой цены
            return false
        }
        return true; //возвращаем все оставшиеся курсы
    });
}

function sortCourses(courses, type) {
   //сортировка цены по возрастанию начальной, убыванию начальной, возрастанию конечной, убыванию конечной. 'START-INC', 'START-DEC', 'END-INC', 'END-DEC' соответственно, false при некорректном значении
    switch (type) {
        case 'START-INC':
            return courses.sort( (a, b) => a.prices[0] - b.prices[0]);
        case 'START-DEC':
            return courses.sort( (a, b) => b.prices[0] - a.prices[0]);
        case 'END-INC':
            return courses.sort( (a, b) => a.prices[1] - b.prices[1]);
        case 'END-DEC':
            return courses.sort( (a, b) => b.prices[1] - a.prices[1]);
        default:
            return false;          
    }
}

console.log(filterCourses(courses, requiredRange1)); 
console.log(filterCourses(courses, requiredRange2)); 
console.log(filterCourses(courses, requiredRange3));
console.log(sortCourses(courses, 'START-INC'));