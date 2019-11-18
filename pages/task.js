import { useRouter } from 'next/router';

export default function Task(props) {
    const router = useRouter();
    return (
        <div>
            <h2>Task details</h2>
            <p>{router.query.title}</p>
        </div>
    );
}