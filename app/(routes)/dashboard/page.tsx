import React from 'react'
// At the top of app\(routes)\dashboard\page.tsx
import Welcome_banner from './_components/Welcome_banner'
import AI_tools from './_components/AI_tools'
import History from './_components/History'

function Dashboard() {
    return (
        <div>
            <Welcome_banner/>
            <AI_tools/>
            <History/>
        </div>
    )
}

export default Dashboard