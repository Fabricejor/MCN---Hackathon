import Image from "next/image";
import Link from "next/link";

export default function VisiteAugmentee() {
  return (
    <section className="w-full flex flex-col items-center gap-6">
      <h2 className='font-["Playfair Display",serif] text-4xl text-[var(--black)]'>Visite Augmentée</h2>

      <div className="w-full rounded-2xl bg-[var(--light)] shadow-xl border border-black/5 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-6 md:p-10">
          <div className="flex flex-col gap-6 pr-0 md:pr-6">
            <div>
              <h3 className='font-["Playfair Display",serif] text-3xl text-[var(--black)]'>Explorez le musée autrement</h3>
            </div>

            <ul className="flex flex-col gap-4 text-[var(--black)]/85">
              <li className="flex items-start gap-3"><span className="text-[var(--gold)] text-xl" aria-hidden>🧭</span><span>Parcours thématiques guidés</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--gold)] text-xl" aria-hidden>📷</span><span>Réalité augmentée interactive</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--gold)] text-xl" aria-hidden>🗺️</span><span>Navigation GPS indoor</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--gold)] text-xl" aria-hidden>👓</span><span>Expérience 360° à distance</span></li>
            </ul>

            <div>
              <Link href="#" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[var(--gold)] text-[var(--black)] font-medium shadow-sm hover:brightness-95 transition">Commencer la visite</Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] md:aspect-auto md:h-[420px] rounded-xl overflow-hidden bg-black/80">
            <Image
              src="/images/visite augmente map.png"
              alt="Carte de visite augmentée"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


