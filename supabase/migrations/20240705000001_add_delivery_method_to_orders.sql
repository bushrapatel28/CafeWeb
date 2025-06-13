-- Create orders table if it doesn't exist
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  status TEXT NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  payment_intent_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add delivery_method column to orders table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_name = 'orders' AND column_name = 'delivery_method'
  ) THEN
    ALTER TABLE orders ADD COLUMN delivery_method text DEFAULT 'pickup';
  END IF;
END $$;