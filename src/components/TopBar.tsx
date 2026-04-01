export default function TopBar() {
  return (
    <div className="bg-navy text-gray-300 text-sm py-2">
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-5 items-center flex-wrap">
          <span>
            <i className="fas fa-map-marker-alt text-cyan mr-1.5" /> Hyderabad,
            Telangana, India
          </span>
          <span>
            <i className="fas fa-envelope text-cyan mr-1.5" />{" "}
            info@softfusion.store
          </span>
          <span>
            <i className="fas fa-phone text-cyan mr-1.5" /> +91 98765 43210
          </span>
        </div>
        <div className="flex gap-3">
          {["facebook-f", "twitter", "linkedin-in", "instagram", "youtube"].map(
            (icon) => (
              <a
                key={icon}
                href="#"
                aria-label={icon}
                className="hover:text-cyan transition-colors"
              >
                <i className={`fab fa-${icon}`} />
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
