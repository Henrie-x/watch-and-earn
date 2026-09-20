import { ArrowLeft, Wallet, Building2, CreditCard, UserRound } from "lucide-react"
import { Link } from "react-router-dom"
import "./Css/WithdrawComp.css"

export default function WithdrawComp() {
  return (
    <div className="withdraw-page">

      <header className="withdraw-header">

        <Link to="/dashboard" className="withdraw-back">
          <ArrowLeft size={17} />
          Dashboard
        </Link>

        <div className="withdraw-title">
          <Wallet size={20} />
          <strong>Withdraw</strong>
        </div>

      </header>

      <main className="withdraw-main">

        <section className="withdraw-balance">

          <span>Available Balance</span>

          <h1>&#8358;0.00</h1>

          <small>
            Minimum withdrawal: &#8358;500
          </small>

        </section>

        <section className="withdraw-card">

          <div className="withdraw-card-heading">
            <h2>Withdrawal Details</h2>
            <p>Enter the bank account you want to receive your money.</p>
          </div>

          <form className="withdraw-form">

            <label>
              <span>Account Name</span>

              <div className="withdraw-input">
                <UserRound size={17} />
                <input
                  type="text"
                  placeholder="Enter account name"
                />
              </div>
            </label>

            <label>
              <span>Bank Name</span>

              <div className="withdraw-input">
                <Building2 size={17} />
                <input
                  type="text"
                  placeholder="Enter bank name"
                />
              </div>
            </label>

            <label>
              <span>Account Number</span>

              <div className="withdraw-input">
                <CreditCard size={17} />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter account number"
                />
              </div>
            </label>

            <label>
              <span>Amount</span>

              <div className="withdraw-input">
                <span>&#8358;</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                />
              </div>
            </label>

            <button type="submit" className="withdraw-button">
              Request Withdrawal
            </button>

          </form>

        </section>

      </main>

    </div>
  )
}