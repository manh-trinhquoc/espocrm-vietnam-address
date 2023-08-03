<?php

namespace Espo\Modules\VietnamAddress\Field\VietnamAddress;

use Espo\ORM\Value\AttributeExtractor;

use Espo\Modules\VietnamAddress\Field\VietnamAddress;

use stdClass;
use InvalidArgumentException;

/**
 * @implements AttributeExtractor<VietnamAddress>
 */
class AddressAttributeExtractor implements AttributeExtractor
{
    public function extract(object $value, string $field): stdClass
    {
        if (!$value instanceof VietnamAddress) {
            throw new InvalidArgumentException();
        }

        return (object) [
            $field . 'Street' => $value->getStreet(),
            $field . 'City' => $value->getCity(),
            $field . 'District' => $value->getDistrict(),
            $field . 'Ward' => $value->getWard()
        ];
    }

    public function extractFromNull(string $field): stdClass
    {
        return (object) [
            $field . 'Street' => null,
            $field . 'City' => null,
            $field . 'District' => null,
            $field . 'Ward' => null
        ];
    }
}
