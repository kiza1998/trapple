-- Insert sample data into categories
INSERT INTO categories (id, name, description, image_url) VALUES
('f47ac10b-58cc-4372-a567-0e02b2c3d479', 'Моти', 'Японский десерт из рисового теста', 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&q=80'),
('f47ac10b-58cc-4372-a567-0e02b2c3d480', 'Торты', 'Авторские торты на заказ', 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80'),
('f47ac10b-58cc-4372-a567-0e02b2c3d481', 'Трайфлы', 'Десерты в стаканчиках', 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80'),
('f47ac10b-58cc-4372-a567-0e02b2c3d482', 'Фрукты в шоколаде', 'Свежие фрукты в бельгийском шоколаде', 'https://images.unsplash.com/photo-1572982669996-98720f6625c7?auto=format&fit=crop&q=80'),
('f47ac10b-58cc-4372-a567-0e02b2c3d483', 'Шоколадные бомбочки', 'Горячий шоколад в шоколадной сфере', 'https://images.unsplash.com/photo-1631207241077-49b7c0168d5c?auto=format&fit=crop&q=80');

-- Insert sample data into products
INSERT INTO products (name, description, price, category_id, image_url, ingredients, is_available) VALUES
-- Моти
('Моти Матча', 'Японский десерт с начинкой из зеленого чая матча', 280.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&q=80', 'Рисовая мука, зеленый чай матча, сахар', true),
('Моти Манго', 'Моти с тропическим вкусом манго', 280.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d479', 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&q=80', 'Рисовая мука, манго, сахар', true),

-- Торты
('Красный бархат', 'Классический торт с нежным сливочным кремом', 2500.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d480', 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80', 'Мука, какао, сливочный сыр, сливки', true),
('Морковный торт', 'Ароматный торт с морковью и грецкими орехами', 2200.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d480', 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80', 'Морковь, орехи, корица, сливочный сыр', true),

-- Трайфлы
('Трайфл Ягодный', 'Нежный десерт из слоев бисквита, свежих ягод и крема', 450.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d481', 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80', 'Бисквит, ягоды, сливки, джем', true),
('Трайфл Шоколадный', 'Шоколадный бисквит с кремом и шоколадной крошкой', 450.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d481', 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80', 'Шоколадный бисквит, шоколадный крем, какао', true),

-- Фрукты в шоколаде
('Клубника в шоколаде', 'Свежая клубника в бельгийском шоколаде', 150.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d482', 'https://images.unsplash.com/photo-1572982669996-98720f6625c7?auto=format&fit=crop&q=80', 'Клубника, бельгийский шоколад, кокосовая стружка', true),
('Малина в шоколаде', 'Сочная малина в белом шоколаде', 170.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d482', 'https://images.unsplash.com/photo-1572982669996-98720f6625c7?auto=format&fit=crop&q=80', 'Малина, белый шоколад, фисташки', true),

-- Шоколадные бомбочки
('Классическая бомбочка', 'Шоколадная сфера с какао и маршмеллоу внутри', 350.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d483', 'https://images.unsplash.com/photo-1631207241077-49b7c0168d5c?auto=format&fit=crop&q=80', 'Бельгийский шоколад, маршмеллоу, какао', true),
('Карамельная бомбочка', 'Шоколадная сфера с карамельным наполнителем', 380.00, 'f47ac10b-58cc-4372-a567-0e02b2c3d483', 'https://images.unsplash.com/photo-1631207241077-49b7c0168d5c?auto=format&fit=crop&q=80', 'Молочный шоколад, карамель, морская соль', true);