CREATE TABLE IF NOT EXISTS info_room (
    id SERIAL, 
    name TEXT NOT NULL,
    square REAL NOT NULL, 
    status TEXT NOT NULL,
    price TEXT NOT NULL,
    type_room INTEGER NOT NULL,
    more_info TEXT
);

CREATE TABLE IF NOT EXISTS info_client (
    id SERIAL,
    first_name TEXT NOT NULL,
    second_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL
);

INSERT INTO info_room(name, square, status, price, type_room, more_info)
VALUES
('Офис 1', 200.2, 'free', 100, 1,  ''),
('Офис 2', 53.2, 'free', 100, 1,  ''),
('Офис 3', 49.3, 'free', 100, 1,  ''),
('Офис 4', 48, 'free', 100, 1,  ''),
('Офис 5', 37.8, 'free', 100, 1,  ''),
('Офис 6, Офис 7', 129.9, 'free', 100, 1,  ''),
('Офис 8', 47.3, 'free', 100, 1,  ''),
('Офис 9', 64.9, 'free', 100, 1,  ''),
('Офис 10', 145.3, 'free', 100, 1,  ''),
('Офис 11', 86.4, 'free', 100, 1,  ''),
('Офис 12, Офис 13', 83, 'free', 100, 1,  ''),
('Офис 14, Офис 15', 84.9, 'free', 100, 1,  ''),
('Офис 16', 50.3, 'free', 100, 1,  ''),
('Офис 17', 53.9, 'free', 100, 1,  ''),
('Офис 18', 56.6, 'free', 100, 1,  ''),
('Офис 19', 133, 'free', 100, 1,  ''),
('Офис 20', 47.7, 'free', 100, 1,  ''),
('Офис 21', 49.4, 'free', 100, 1,  ''),
('Офис 22', 52.8, 'free', 100, 1,  ''),
('Офис 23', 49.5, 'free', 100, 1,  ''),
('Офис 24', 54.8, 'free', 100, 1,  ''),
('Офис 25', 53.4, 'free', 100, 1,  ''),
('Офис 26', 51.1, 'free', 100, 1,  ''),
('Офис 27', 48.7, 'free', 100, 1,  ''),
('Коридор С3', 51.2, 'free', 100, 1,  ''),
('Коридор С2', 28.6, 'free', 100, 1,  ''),
('Коридор С1', 48.3, 'free', 100, 1,  ''),
('Коридор А3', 56.3, 'free', 100, 1,  ''),
('Коридор А2', 11, 'free', 100, 1,  ''),
('Коридор А1', 40.3, 'free', 100, 1,  ''),
('Коридор В3', 48.9, 'free', 100, 1,  ''),
('Коридок В2', 8.5, 'free', 100, 1,  ''),
('Коридор В1', 54.6, 'free', 100, 1,  ''),
('Переговорная', 18.5, 'free', 100, 1,  ''),
('Переговорная', 16, 'free', 100, 1,  ''),
('Переговорная', 14.9, 'free', 100, 1,  ''),
('Санузел мужской', 27.4, 'free', 100, 1,  ''),
('Санузел женский', 27.7, 'free', 100, 1,  ''),
('Переговорная', 12.9, 'free', 100, 1,  ''),
('Переговорная', 23.8, 'free', 100, 1,  ''),
('Миникухня', 10.8, 'free', 100, 1,  ''),
('Серверная', 5.8, 'free', 100, 1,  ''),
('Подсобное помещение', 9.6, 'free', 100, 1,  ''),
('Кухня', 11.3, 'free', 100, 1,  ''),
('Санузел', 23.4, 'free', 100, 1,  ''),
('Санузел', 25.4, 'free', 100, 1,  ''),
('Лифтовый холл', 53.8, 'free', 100, 1,  ''),
('Миникухня', 10.8, 'free', 100, 1,  '');