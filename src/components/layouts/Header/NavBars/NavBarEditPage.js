import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
import Arrow from '../../Utilities/Arrow'
import { useEditor } from "@craftjs/core"

const NavBarEditPage = () => {
  const { enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }))
  return (
    <>
        <Navbar className='naveditpage ms-5' bg='light' expand="lg">
            <Arrow />
            {enabled && (<>
            <Button size="sm" 
              disabled={!canUndo} 
              onClick={() => actions.history.undo()} 
              variant="outline-secondary" 
              className='ms-5 me-3'>Undo</Button>
            <Button size="sm" 
              disabled={!canRedo} 
              onClick={() => actions.history.redo()} 
              variant="outline-secondary">Redo</Button></>)}            
            <h6 className='text-center w-100 pt-1 me-5'>Basic Details Edit Page</h6>
            <Button size="sm" variant="outline-secondary" className='me-5' style={{width: '10rem'}}>Save Changes</Button>
        </Navbar>
    </>
  )
}

export default NavBarEditPage