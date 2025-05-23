import styles from './styles.module.css'

interface ActionButtonProps {
    title: string
    subtitle: string
    icon: string
    color: string
    onClick: VoidFunction
}

export default function ActionButton({ title, subtitle, icon, color, onClick }: ActionButtonProps) {
    return (
        <div className={styles.container} onClick={onClick}>
            <i className={icon} style={{color: color}}></i>
            <h2>{ title }</h2>
            <h3>{ subtitle }</h3>
        </div>
    )
}