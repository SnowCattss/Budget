from app.database.connection import Base, engine
from app.models.transaction import Transaction

print("Creating database tables...")
Base.metadata.create_all(bind=engine)
print("Done")