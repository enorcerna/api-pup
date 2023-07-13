
import Nigthmare from "nightmare"

async function LinkExtra ( url: string )
{
  const browser = new Nigthmare( { show: false } )
  const video = await browser.goto( url ).wait( 'video' ).evaluate( () => document.querySelector( 'video' )?.getAttribute( 'src' ) )
  await browser.end()
  return video
}
export default LinkExtra
