from pydantic import BaseModel
from datetime import date

#Outgoing data
class TransactionResponse(BaseModel):
    id: int
    name: str
    amoutn: float
    category: str | None
    date: date

    class Config:
        orm_mode = True #allows SQLAlchemy objects to be read as dicts