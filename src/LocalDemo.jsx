import ChessBoard from './components/ChessBoard.jsx'
import MoveHistory from './components/MoveHistory.jsx'
import useChessGame from './hooks/useChessGame.js'

export default function LocalDemo() {
  const {
    game, turn, history, status, selectedSquare, legalDestinations,
    lastMove, selectSquare, resetGame, resign,
  } = useChessGame()

  const statusText = {
    playing: `${turn === 'w' ? 'White' : 'Black'} to move`,
    check: `${turn === 'w' ? 'White' : 'Black'} is in check`,
    checkmate: `${status.winner === 'w' ? 'White' : 'Black'} wins`,
    stalemate: 'Stalemate',
    draw: 'Draw',
  }[status.type]

  return (
    <div className="min-h-screen bg-cream-100 text-espresso-500">
      <header className="border-b border-cream-200 bg-cream-50">
        <div className="mx-auto max-w-[1400px] px-6 py-5">
          <h1 className="font-display text-3xl">CheckMate</h1>
          <p className="font-sans text-sm text-espresso-400">Two players · One device</p>
        </div>
      </header>
      <main className="mx-auto grid max-w-[1400px] gap-10 px-6 py-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(17rem,1fr)]">
        <ChessBoard
          game={game}
          turn={turn}
          status={status}
          selectedSquare={selectedSquare}
          legalDestinations={legalDestinations}
          lastMove={lastMove}
          onSquareClick={selectSquare}
          onReset={resetGame}
          onResign={resign}
          onDraw={() => {}}
        />
        <aside className="space-y-8">
          <div className="border-b border-cream-300 pb-5">
            <p className="section-label">Game status</p>
            <p role="status" className="mt-3 font-display text-3xl">{statusText}</p>
            <p className="mt-2 text-sm text-espresso-400">Take turns moving White and Black pieces on this board. Legal moves are highlighted after selecting a piece.</p>
          </div>
          <MoveHistory history={history} />
        </aside>
      </main>
    </div>
  )
}
