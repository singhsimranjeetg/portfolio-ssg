import Container from './container'


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-6">
          <p className="text-1xl text-center">
            Copyright &copy; 2021 Simranjeet Singh. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  )
}
