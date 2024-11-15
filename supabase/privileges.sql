-- Grant privileges for authenticated users
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO authenticated;

-- Grant privileges for anonymous access (public)
GRANT USAGE ON SCHEMA public TO anon;

-- Categories table privileges
GRANT SELECT ON categories TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON categories TO authenticated;

-- Products table privileges
GRANT SELECT ON products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON products TO authenticated;

-- Orders table privileges
GRANT SELECT ON orders TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON orders TO authenticated;

-- Order items table privileges
GRANT SELECT ON order_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON order_items TO authenticated;

-- Reviews table privileges
GRANT SELECT ON reviews TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON reviews TO authenticated;

-- Delivery zones table privileges
GRANT SELECT ON delivery_zones TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON delivery_zones TO authenticated;

-- Grant sequence usage
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;