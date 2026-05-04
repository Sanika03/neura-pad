import LiveBlocksProvider from "@/providers/liveBlocksProvider"

function PageLayout({children}: {children: React.ReactNode}) {  
  return (
    <LiveBlocksProvider>
      {children}
    </LiveBlocksProvider>
  )
}
export default PageLayout