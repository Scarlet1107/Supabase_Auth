import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Navigation from "./navigation"

const SupabaseListener = async () => {
    const supabase = createServerComponentClient({ cookies })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    return <Navigation session={session} />
}

export default SupabaseListener;



// 以下警告を解消するためのコード。しかしヘッダーにUser not authenticated.と表示されるため要修正。

/*
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Navigation from "./navigation"

const SupabaseListener = async () => {
    const supabase = createServerComponentClient({ cookies })
    
    try {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
            throw error
        }
        
        if (!session) {
            return <div>User not authenticated.</div>
        }
        
        return <Navigation session={session} />
    } catch (error) {
        console.error('Error fetching session:', error)
        return <div>Error fetching user information.</div>
    }
}

export default SupabaseListener;
*/