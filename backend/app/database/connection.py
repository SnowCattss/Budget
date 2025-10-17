from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from dotenv import load_dotenv

#load vars from .env
load_dotenv()

#default fallback if no .env
DATABASE_URL = os.getenv(
    "DATABASE_URL", "postgresql://budget_user:yourpassword@localhost/budget_db"
)

#engine creation
engine = create_engine(DATABASE_URL)

#Individual db sessions per request
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bid=engine)

#data model blueprint
Base = declarative_base()

#create and close session automatically
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()