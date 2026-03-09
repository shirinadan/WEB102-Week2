import { useState } from "react"
import "./App.css"

const CARDS = [
  {
    id: 1,
    category: "Watering",
    question: "How often should you usually water a typical indoor succulent?",
    answer: "About every 2–3 weeks, letting the soil dry out completely first."
  },
  {
    id: 2,
    category: "Light",
    question: "What does 'bright indirect light' mean for houseplants?",
    answer: "Lots of light but not direct sun on the leaves, like near a bright window with a sheer curtain."
  },
  {
    id: 3,
    category: "General",
    question: "What is the name of the process plants use to make their own food?",
    answer: "Photosynthesis."
  },
  {
    id: 4,
    category: "Watering",
    question: "What does it usually mean if a plant’s leaves are yellowing from overwatering?",
    answer: "The roots are staying too wet and may start to rot."
  },
  {
    id: 5,
    category: "General",
    question: "Which plant is often called a 'snake plant'?",
    answer: "Sansevieria (also known as Dracaena trifasciata)."
  },
  {
    id: 6,
    category: "Watering",
    question: "What simple tool can you use to check if the soil is dry?",
    answer: "Your finger—stick it 1–2 inches into the soil to feel for moisture."
  },
  {
    id: 7,
    category: "Watering",
    question: "Why do many houseplants like pots with drainage holes?",
    answer: "So extra water can escape and the roots don’t sit in water."
  },
  {
    id: 8,
    category: "Light",
    question: "What should you do if your plant is leaning toward a window?",
    answer: "Rotate the pot regularly so all sides get light."
  },
  {
    id: 9,
    category: "General",
    question: "What is a good sign that a plant might need repotting?",
    answer: "Roots are growing out of the drainage holes or circling the pot tightly."
  },
  {
    id: 10,
    category: "General",
    question: "What is a common reason for brown, crispy leaf tips?",
    answer: "Low humidity or underwatering (especially on tropical plants)."
  }
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [started, setStarted] = useState(false)

  const currentCard = CARDS[currentIndex]

  const handleCardClick = () => {
    if (!started) return
    setIsFlipped((prev) => !prev)
  }

  const handleStartClick = () => {
    setStarted(true)
    setIsFlipped(false)
  }

  // RANDOM NEXT CARD (no immediate repeat)
  const handleNextClick = () => {
    if (!started) {
      handleStartClick()
      return
    }

    setIsFlipped(false)

    setCurrentIndex((prevIndex) => {
      if (CARDS.length <= 1) return prevIndex

      let nextIndex = prevIndex
      while (nextIndex === prevIndex) {
        nextIndex = Math.floor(Math.random() * CARDS.length)
      }
      return nextIndex
    })
  }

  return (
    <div className="app">
      <header className="header">
        <h1>The Ultimate Plant Parent!</h1>
        <p>
          How good of a plant parent are you? Test all of your planty knowledge
          here!
        </p>
        <p className="card-count">Number of cards: {CARDS.length}</p>
      </header>

      <main className="main">
        <div className="flashcard" onClick={handleCardClick}>
          <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
            <div
              className={`flip-card-front ${
                !started ? "start-card" : currentCard.category.toLowerCase()
              }`}
            >
              <p className="flashcard-text">
                {started ? currentCard.question : "Start!"}
              </p>
              <p className="hint">
                {started
                  ? "Click to see the answer"
                  : "Click Next to begin, then click the card to flip."}
              </p>
            </div>

            <div className="flip-card-back">
              <p className="flashcard-text">{currentCard.answer}</p>
              <p className="hint">Click to see the question</p>
            </div>
          </div>
        </div>

        <button className="next-button" onClick={handleNextClick}>
          {started ? "Next card" : "Start"}
        </button>
      </main>
    </div>
  )
}

export default App