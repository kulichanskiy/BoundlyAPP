export function switchTab(targetIndex) {
    const step = targetIndex > currentTabIndex ? 1 : -1;

    // Анимация переключения через промежуточные вкладки
    const interval = setInterval(() => {
        // Убираем активный класс с текущей вкладки
        tabs[currentTabIndex].classList.remove('active');

        // Обновляем индекс
        currentTabIndex += step;

        // Добавляем активный класс к следующей вкладке
        tabs[currentTabIndex].classList.add('active');

        // Если достигли целевой вкладки, завершаем
        if (currentTabIndex === targetIndex) {
            clearInterval(interval);
        }
    }, 200); // Интервал в миллисекундах между шагами
}