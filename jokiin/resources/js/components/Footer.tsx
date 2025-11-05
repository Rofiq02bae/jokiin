import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl mb-4">Jokiin</h3>
            <p className="text-sm mb-4">
              Mitra terpercaya untuk kesuksesan akademik mahasiswa Indonesia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Konsultasi Tugas & Projek</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pendampingan Skripsi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bimbingan Akademik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Development Projek</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Konsultasi Metodologi</a></li>
            </ul>
          </div>

          {/* Company */}
          {/* <div>
            <h4 className="text-white mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tim Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>244C+X95, Griya Prajamukti, Kalisapu, Kec. Slawi, Kabupaten Tegal, Jawa Tengah 52416</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+62 815-6838-9940</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@jasaumkm.com</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {currentYear} Jokiin. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
