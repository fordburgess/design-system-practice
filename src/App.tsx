import ThemeProvider from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Card, { type CardProps } from "./components/Card";
import Courchevel from './assets/french-alps.webp';
import GamlaStan from './assets/gamla-stan.jpg';
import CardHeader from "./components/CardHeader";
import "./styles/index.css";
import CardFooter from "./components/CardFooter";

const testCards: Array<CardProps & { credit: string }> = [
  {
    title: "Hello, World",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    image: Courchevel,
    credit: "John Doe - AP"
  },
  {
    title: "Hello again, World",
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    image: GamlaStan,
    credit: "Jane Doe - Condé Nast"
  }
]

function App() {

  return (
    <ThemeProvider>
      <Layout>
        <div
          className="box-border overflow-y-scroll h-full flex flex-col justify-start items-center py-4 md:flex-row md:justify-around md:py-0"
        >
          {
            testCards.map((card: CardProps) => {
              return (
                <Card
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  header={<CardHeader />}
                  footer={<CardFooter credit={card.credit} />}
                />
              )
            })
          }
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
