from sqlalchemy import Column, Integer, String, Float, Date 
from app.database.connection import Base

class Transaction(Base):
    __tablename__="transactions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    amount = Column(Float, nullable=False)
    category = Column(String, nullable=True)
    date = Column(Date, nullable=False)