import { ServerData } from '@/app/utils/ServerData';
import DevFlagModal from './DevFlagModal';

async function getStatus() {
    try {
        const data = new ServerData({ path: '/getStatus', revalidate: 0 })
        const res = await data.get();
        return await res.json()
    } catch (error) {
        throw new Error('Failed to fetch development status flag info.')
    }
}

const DevFlag = async () => {
    const status = await getStatus()
    if (status.devFlag) {
        return (
            <DevFlagModal  description={status.description}/>
        )
    } 
}


export default DevFlag