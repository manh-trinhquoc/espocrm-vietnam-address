<?php

namespace Espo\Modules\VietnamAddress\Field;

use Espo\Modules\VietnamAddress\Field\VietnamAddress\AddressBuilder;

/**
 * An address value object. Immutable.
 *
 * @immutable
 */
class VietnamAddress
{
    private $street = null;
    private $city = null;
    private $district = null;
    private $ward = null;

    public function __construct(
        ?string $street = null,
        ?string $city = null,
        ?string $district = null,
        ?string $ward = null
    ) {
        $this->street = $street;
        $this->city = $city;
        $this->district = $district;
        $this->ward = $ward;
    }

    /**
     * Whether has a street.
     */
    public function hasStreet(): bool
    {
        return $this->street !== null;
    }

    /**
     * Whether has a city.
     */
    public function hasCity(): bool
    {
        return $this->city !== null;
    }

    /**
     * Whether has a District.
     */
    public function hasDistrict(): bool
    {
        return $this->district !== null;
    }

    /**
     * Whether has a Ward.
     */
    public function hasWard(): bool
    {
        return $this->ward !== null;
    }

    /**
     * Get a street.
     */
    public function getStreet(): ?string
    {
        return $this->street;
    }

    /**
     * Get a city.
     */
    public function getCity(): ?string
    {
        return $this->city;
    }

    /**
     * Get a District.
     */
    public function getDistrict(): ?string
    {
        return $this->district;
    }

    /**
     * Get a Ward.
     */
    public function getWard(): ?string
    {
        return $this->ward;
    }


    /**
     * Clone with a street.
     */
    public function withStreet(?string $street): self
    {
        $newAddress = self::createBuilder()
            ->clone($this)
            ->setStreet($street)
            ->build();

        return $newAddress;
    }

    /**
     * Clone with a city.
     */
    public function withCity(?string $city): self
    {
        $newAddress = self::createBuilder()
            ->clone($this)
            ->setCity($city)
            ->build();

        return $newAddress;
    }

    /**
     * Clone with a District.
     */
    public function withDistrict(?string $district): self
    {
        $newAddress = self::createBuilder()
            ->clone($this)
            ->setDistrict($district)
            ->build();

        return $newAddress;
    }

    /**
     * Clone with a Ward.
     */
    public function withWard(?string $ward): self
    {
        $newAddress = self::createBuilder()
            ->clone($this)
            ->setWard($ward)
            ->build();

        return $newAddress;
    }

    /**
     * Create an empty address.
     */
    public static function create(): self
    {
        return new self();
    }

    /**
     * Create a builder.
     */
    public static function createBuilder(): AddressBuilder
    {
        return new AddressBuilder();
    }
}
