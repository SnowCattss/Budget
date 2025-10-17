from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.database.connection import get_db
from api.models.transaction import Transaction
from app.models.transaction_schema import TransactionsResponse

router = APIRouter(prefix="/transactions", tags=["Transactions"])

@router.get("/", response_model=list[TransactionsResponse])
def get_transactions(db: Session = Depends(get_db)):
    #Pull all transactions from db
    transactions = db.query(Transaction).all()
    return transactions